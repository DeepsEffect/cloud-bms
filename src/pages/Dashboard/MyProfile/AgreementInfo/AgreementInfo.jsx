import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import InfoCard from "./InfoCard/InfoCard";
import { Spinner } from "@material-tailwind/react";
import useAuth from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";

const AgreementInfo = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  // Fetching agreement by email
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
    return (
      <div className="flex justify-center items-center h-32">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  // Define the data for InfoCard
  const cardData = [
    { title: "Apartment", desc: agreement?.apartment_no },
    { title: "floor", desc: agreement?.floor_no },
    { title: "block", desc: agreement?.block_name },
    {
      title: "agreement date",
      desc: agreement
        ? new Date(agreement.agreementDate).toLocaleDateString()
        : "",
    },
    { title: "Status", desc: agreement?.status },
    ...(role === "member"
      ? [
          { title: "Room", desc: agreement?.room_no },
          {
            title: "Checked Time",
            desc: agreement?.checkedTime
              ? new Date(agreement.checkedTime).toLocaleDateString()
              : "not yet checked",
          },
          { title: "Rent", desc: `$${agreement?.rent}` },
        ]
      : []),
  ];

  return (
    <div className="flex overflow-x-auto gap-4 justify-center flex-wrap bg-blue-gray-50 p-4">
      {cardData.map((card, index) => (
        <InfoCard key={index} title={card.title} desc={card.desc} />
      ))}
    </div>
  );
};

export default AgreementInfo;
