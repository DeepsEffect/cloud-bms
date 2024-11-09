import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { IconButton, Spinner, Tooltip } from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import toast from "react-hot-toast";
import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";
import useAuth from "../../../../hooks/useAuth";

const AgreementRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { loading } = useAuth();
  //   handle approve requests

  const handleApproveRequest = (_id, userEmail) => {
    // console.log(_id);
    axiosSecure
      .patch(`/agreements/${_id}`, { userEmail: userEmail })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success(" Request Approved");
          refetch();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Handle reject requests
  const handleRejectRequest = (_id) => {
    axiosSecure
      .patch(`/agreements/${_id}/reject`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Request Rejected");
          refetch();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // getting the agreements data
  const {
    data: agreements = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const { data } = await axiosSecure("/agreements");
      return data;
    },
  });
  // console.log(agreements);
  const TABLE_HEAD = [
    "Name",
    "Email",
    "Floor No",
    "Block Name",
    "Room no",
    "Rent",
    "Request Date",
    "Status",
    "",
    "",
  ];

  if (isLoading || loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div>
      <DashboardTitle title={"total agreements"} measure={agreements} />
      {/* table */}
      <section className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full overflow-scroll lg:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD?.map((head, idx) => (
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
          <tbody>
            {Array.isArray(agreements) &&
              agreements.map(
                ({
                  userName,
                  userEmail,
                  floor_no,
                  block_name,
                  rent,
                  agreementDate,
                  apartment_no: room_no,
                  status,
                  _id,
                }) => (
                  <tr
                    key={_id}
                    className="even:bg-blue-gray-50/50 overflow-hidden"
                  >
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {userName}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {userEmail}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {floor_no}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {block_name}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {room_no}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        ${rent}
                      </div>
                    </td>
                    <td className="p-4">
                      <div color="blue-gray" className="font-normal">
                        {new Date(agreementDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div
                        className={`font-normal ${
                          status === "pending"
                            ? "text-orange-600"
                            : status === "approved"
                            ? "text-green-600"
                            : status === "rejected"
                            ? "text-red-600"
                            : ""
                        }`}
                      >
                        {status}
                      </div>
                    </td>
                    <td>
                      <Tooltip content="approve">
                        <IconButton
                          onClick={() => handleApproveRequest(_id, userEmail)}
                          color="green"
                        >
                          <FaCheck />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip content="reject">
                        <IconButton
                          onClick={() => handleRejectRequest(_id)}
                          color="red"
                        >
                          <FaXmark className="font-bold text-xl" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AgreementRequest;
