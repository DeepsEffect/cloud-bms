import DashboardTitle from "../Common/DashboardTitle/DashboardTitle";
import { Spinner } from "@material-tailwind/react";
import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";
import useAnnouncement from "../../../hooks/useAnnouncement";

const Announcement = () => {
  const [announcements, isLoading] = useAnnouncement();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <DashboardTitle title={"Total Announcements"} measure={announcements} />

      <section className="grid grid-cols-1 gap-8 mt-10 mx-auto items-center justify-center lg:px-72 px-4">
        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className="relative bg-gradient-to-br from-primary-600 to-accent-600 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="absolute top-4 right-4 text-white opacity-75">
              <FaBullhorn className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white flex items-center mb-4">
              <FaCalendarAlt className="mr-2 text-yellow-300" />
              {announcement.title}
            </h2>
            <p className="text-sm text-white opacity-75 mb-6">
              {new Date(announcement.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-white leading-relaxed">{announcement.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Announcement;
