import useRole from "../../../../hooks/useRole";
import InfoCard from "./InfoCard/InfoCard";

const AgreementInfo = () => {
  const [role] = useRole();
  const description = role === "member" ? 30 : "null";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center bg-gray-100 py-10 lg:p-14 overflow-auto">
      {/* apartment */}
      <InfoCard title={"apartment"} desc={description} />
      {/* floor */}
      <InfoCard title={"floor"} desc={description} />
      {/* block */}
      <InfoCard title={"block"} desc={description} />
      {/* room */}
      <InfoCard title={"room"} desc={description} />
      {/* date */}
      <InfoCard title={"agreement date"} desc={description} />
    </div>
  );
};

export default AgreementInfo;
