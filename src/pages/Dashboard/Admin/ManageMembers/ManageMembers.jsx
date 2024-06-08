import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { IconButton, Spinner, Tooltip } from "@material-tailwind/react";
import { IoMdRemoveCircle } from "react-icons/io";
import toast from "react-hot-toast";

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: members = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/members?role=member`);
      return data;
    },
  });
  console.log(members);

  // remove member
  const handleRemoveMember = (_id) => {
    // console.log(_id);
    axiosSecure
      .patch(`/members/${_id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Member is removed");
          refetch();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  const TABLE_HEAD = ["Name", "Email", "Role", ""];
  return (
    <div>
      <DashboardTitle title={"total members"} measure={members} />
      <section className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full overflow-scroll lg:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left ">
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
          <tbody>
            {members.map(({ name, email, role, _id }) => (
              //   index
              <tr key={_id} className="even:bg-blue-gray-50/50 overflow-hidden">
                <td className="p-4">
                  <div color="blue-gray" className="font-normal">
                    {name}
                  </div>
                </td>
                <td className="p-4">
                  <div color="blue-gray" className="font-normal">
                    {email}
                  </div>
                </td>
                <td className="p-4">
                  <div color="blue-gray" className="font-normal">
                    {role}
                  </div>
                </td>
                <td className="p-4">
                  <Tooltip content="remove">
                    <IconButton
                      onClick={() => handleRemoveMember(_id)}
                      className="bg-red-600"
                    >
                      <IoMdRemoveCircle className="text-xl" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ManageMembers;
