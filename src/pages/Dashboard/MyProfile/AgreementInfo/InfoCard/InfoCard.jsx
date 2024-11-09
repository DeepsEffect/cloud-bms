/* eslint-disable react/prop-types */
const InfoCard = ({ title, desc }) => {
  const titleToColorClass = {
    Apartment: "bg-teal-500",
    floor: "bg-blue-500",
    block: "bg-purple-500",
    Room: "bg-indigo-500",
    "agreement date": "bg-orange-500",
    "Checked Time": "bg-pink-500",
    default: "bg-green-500",
    "Available Rooms": "bg-orange-500",
    "Unavailable Rooms": "bg-red-500",
    "Total Users": "bg-blue-500",
    "Total Members": "bg-purple-500",
  };
  const colorClass = titleToColorClass[title] || titleToColorClass.default;

  return (
    <div className="flex-shrink-0 w-full sm:w-[250px] md:w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      {/* Title Section with Background Color */}
      <div
        className={`h-20 ${colorClass} flex items-center justify-center rounded-t-lg`}
      >
        <p className="text-white text-lg font-semibold capitalize">{title}</p>
      </div>

      {/* Description Section */}
      <div className="p-5 text-center">
        <p className="text-gray-700 text-xl font-medium truncate">
          {desc ? desc : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
