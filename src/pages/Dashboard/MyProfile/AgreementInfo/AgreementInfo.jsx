import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import InfoCard from "./InfoCard/InfoCard";
import { Spinner } from "@material-tailwind/react";
import useAuth from "../../../../hooks/useAuth";

const AgreementInfo = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // getting agreement by email
  const {
    data: agreement = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreements/${user.email}`);
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-center bg-gray-100 py-10 lg:p-14 overflow-auto">
      {/* apartment */}
      <InfoCard title={"Apartment"} desc={agreement?.apartment_no} />
      {/* room */}
      <InfoCard title={"Room"} desc={agreement?.room_no} />
      {/* floor */}
      <InfoCard title={"floor"} desc={agreement?.floor_no} />
      {/* block */}
      <InfoCard title={"block"} desc={agreement?.block_name} />
      {/* date */}
      <InfoCard
        title={"agreement date"}
        desc={
          agreement
            ? new Date(agreement.agreementDate).toLocaleDateString()
            : ""
        }
      />
      <InfoCard
        title={"Checked Time"}
        desc={
          agreement ? new Date(agreement.checkedTime).toLocaleDateString() : ""
        }
      />
      {/* status */}
      <InfoCard title={"Status"} desc={agreement?.status} />
    </div>
  );
};

export default AgreementInfo;
