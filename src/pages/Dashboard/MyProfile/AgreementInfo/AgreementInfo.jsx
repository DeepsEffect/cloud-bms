import InfoCard from "./InfoCard/InfoCard";

const AgreementInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 justify-center bg-gray-100 py-10 lg:p-14 overflow-auto">
      {/* apartment */}
      <InfoCard title={'apartment'} desc={'20'} />
      {/* floor */}
      <InfoCard title={'floor'} desc={'19'} />
      {/* block */}
      <InfoCard title={'block'} desc={'20'} />
      {/* room */}
      <InfoCard title={'room'} desc={'200'} />
      {/* date */}
      <InfoCard title={'agreement date'} desc={'20-20-24'} />
    </div>
  );
};

export default AgreementInfo;
