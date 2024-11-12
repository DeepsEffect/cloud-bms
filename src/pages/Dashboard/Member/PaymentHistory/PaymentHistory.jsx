import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";
import useAuth from "../../../../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    const fetchPayments = async () => {
      try {
        const res = await axiosSecure("/payments");
        setPayments(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPayments();
  }, [axiosSecure]);

  //   console.log(payments);
  const usersPayment = payments.filter(
    (payment) => payment?.email === user?.email
  );
  // console.log(payments);
  // console.log(usersPayment);

  const TABLE_HEAD = ["Email", "Amount", "Transactor Id", "Date", "Status"];
  return (
    <div>
      <DashboardTitle title={"payment history"} />
      {usersPayment === 0 ? (
        <h2 className="text-xl font-heading text-center mt-10">
          There is no history yet...
        </h2>
      ) : (
        <section className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full overflow-scroll lg:overflow-hidden">
          <table className="w-full min-w-max table-auto text-left overflow-x-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, idx) => (
                  <th
                    key={idx}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <div
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            {loading ? (
              <Spinner />
            ) : (
              <tbody>
                {usersPayment.map(({ email, transactionId, date, price }) => (
                  //   index
                  <tr
                    key={transactionId}
                    className="even:bg-blue-gray-50/50 overflow-hidden"
                  >
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {email}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        ${price}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {transactionId}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {new Date(date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-normal text-green-400">paid</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </section>
      )}
    </div>
  );
};

export default PaymentHistory;
