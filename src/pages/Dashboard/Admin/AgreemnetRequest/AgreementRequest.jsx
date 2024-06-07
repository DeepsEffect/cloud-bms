import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import {
  IconButton,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import toast from "react-hot-toast";

const AgreementRequest = () => {
  const axiosSecure = useAxiosSecure();
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

  //   const handleApproveRequest = useMutation({
  //     mutationFn: async (_id) => {
  //       const res = axiosSecure.patch(`/agreements/${_id}`);
  //       return res.data;
  //     },
  //   });

  // get agreements data
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

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }
  //   console.log(agreements);
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

  return (
    <div>
      <section className="min-h-32 bg-accent-500 text-center font-bold text-white flex justify-center items-center text-xl font-heading">
        <h2>Total Agreement requests: {agreements.length}</h2>
      </section>
      {/* table */}
      <section className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full overflow-scroll lg:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, idx) => (
                <th
                  key={idx}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {agreements.map(
              ({
                userName,
                userEmail,
                floor_no,
                block_name,
                rent,
                agreementDate,
                apartment_no: room_no,
                status,
                userId,
                _id,
              }) => (
                //   index
                <tr
                  key={userId}
                  className="even:bg-blue-gray-50/50 overflow-hidden"
                >
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {userName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {userEmail}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {floor_no}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {block_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {room_no}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${rent}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(agreementDate).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color={status === "pending" ? "orange" : "green"}
                      className="font-normal"
                    >
                      {status}
                    </Typography>
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
                      <IconButton color="red">
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
