import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axiosSecure("/payments");
        setPayments(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPayments();
  }, [axiosSecure]);
  console.log(payments);
  return (
    <div>
      <DashboardTitle title={"payment history"} />
      <h2 className="text-xl font-heading text-center mt-10">
        There is no history yet...
      </h2>
    </div>
  );
};

export default PaymentHistory;
