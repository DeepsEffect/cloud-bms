import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Spinner } from "@material-tailwind/react";
import useAuth from "../../../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const MakePayment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // Fetching agreement by email
  const {
    data: agreement = [],
    isLoading,
    refetch,
  } = useQuery({
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
      {agreement?.rent === 0 ? (
        <h2 className="text-center text-green-400 font-heading text-xl mt-10 font-bold">
          No Rent Due
        </h2>
      ) : (
        <h2 className="text-center text-red-400 font-heading text-xl mt-10 font-bold">
          Rent Due: ${agreement?.rent}
        </h2>
      )}

      <Elements stripe={stripePromise}>
        <CheckoutForm refetch={refetch} price={agreement?.rent} />
      </Elements>
    </div>
  );
};

export default MakePayment;
