/* eslint-disable react/prop-types */
const InfoCard = ({ title, desc }) => {
  const titleToColorClass = {
    apartment: "bg-red-400",
    floor: "bg-blue-400",
    block: "bg-purple-400",
    room: "bg-green-400",
    "agreement date": "bg-orange-400",
    default: "bg-green-400",
  };
  const colorClass = titleToColorClass[title] || titleToColorClass.default;
  return (
    <div className="container mx-auto pr-4">
      <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
        <div className={`h-20 ${colorClass} flex items-center justify-between`}>
          <p className="mr-0 text-white text-lg pl-5 capitalize">{title}</p>
        </div>
        <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600"></div>
        <p className="py-4 text-3xl ml-5">{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
