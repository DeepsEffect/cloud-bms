import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Spinner } from "@material-tailwind/react";
import useAuth from "../../../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const MakePayment = () => {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // Fetching agreement by email
  const { data: agreement = [], isLoading } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreements/${user.email}`);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <DashboardTitle title={"make payment"} />
      <h2 className="text-center font-heading text-xl mt-10 font-bold">
        Rent Due: ${agreement?.rent}
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default MakePayment;
