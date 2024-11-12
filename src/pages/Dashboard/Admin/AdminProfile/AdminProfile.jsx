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

  // total agreements
  const { data: agreements = [] } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreements`);
      return data;
    },
  });

  const totalApartments = apartments?.length || 0;
  const agreementsCount = agreements?.length || 0;

  // Calculate percentages
  const availablePercentage =
    ((totalApartments - agreementsCount) / totalApartments) * 100;
  const unavailablePercentage = (agreementsCount / totalApartments) * 100;

  return (
    <div className="flex flex-wrap gap-4 lg:gap-8 justify-center bg-gray-100 py-10 lg:p-14 overflow-auto">
      <InfoCard title={"Total Apartments"} desc={apartments?.length} />
      <InfoCard
        title={"Available Apartments"}
        desc={`${Math.floor(availablePercentage)}%`}
      />
      <InfoCard
        title={"Unavailable Apartments"}
        desc={`${Math.floor(unavailablePercentage)}%`}
      />
      <InfoCard title={"Total Users"} desc={users?.length} />
      <InfoCard title={"Total Members"} desc={members?.length} />
    </div>
  );
};

export default AdminProfile;
