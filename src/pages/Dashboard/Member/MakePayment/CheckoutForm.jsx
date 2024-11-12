/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
const CheckoutForm = ({ price, refetch }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
    } else {
      console.log("PaymentMethod", paymentMethod);
    }
    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.display || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.error("Payment confirmation error:", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        toast.success(`Payment Successful!`);

        // Save payment info in the database
        const payment = {
          email: user.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(), // UTC date, optionally use Moment.js to format
        };

        try {
          const res = await axiosSecure.post("/payment", payment);
          console.log("Payment response:", res);

          // Check response status for success and trigger data refetch
          if (res.status === 200) {
            refetch();
          } else {
            console.error("Unexpected response status:", res.status);
          }
        } catch (error) {
          console.error("Error saving payment info:", error);
        }
      } else {
        console.warn("Payment did not succeed:", paymentIntent.status);
      }
    }
  };

  return (
    <form className="max-w-md mx-auto mt-4 p-4" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <Button
        size="sm"
        type="submit"
        className="bg-primary-500 mt-4 mx-auto"
        disabled={!stripe || !clientSecret}
      >
        Make Payment
      </Button>
      {transactionId && (
        <div className="text-green-500 mt-4">
          your transaction id: {transactionId}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
