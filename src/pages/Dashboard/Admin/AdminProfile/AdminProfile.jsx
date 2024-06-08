import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import InfoCard from "../../MyProfile/AgreementInfo/InfoCard/InfoCard";

const AdminProfile = () => {
  // total apartment
  const axiosSecure = useAxiosSecure();
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosSecure("/apartments");
      return res.data;
    },
  });

  // total users
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

  // total members
  const { data: members = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/members?role=member`);
      return data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-center bg-gray-100 py-10 lg:p-14 overflow-auto">
      <InfoCard title={"total rooms"} desc={apartments?.length} />
      <InfoCard title={"Available Rooms"} desc={"45%"} />
      <InfoCard title={"Unavailable Rooms"} desc={"55%"} />
      <InfoCard title={"Total Users"} desc={users?.length} />
      <InfoCard title={"Total Members"} desc={members?.length} />
    </div>
  );
};

export default AdminProfile;
