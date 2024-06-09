import DashboardTitle from "../Common/DashboardTitle/DashboardTitle";
import { Spinner } from "@material-tailwind/react";
import useAnnouncement from "../../../hooks/useAnnouncement";

const Announcement = () => {
  const [announcements, isLoading] = useAnnouncement();
  console.log(announcements);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <DashboardTitle title={"total announcement"} measure={announcements} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 justify-evenly">
        {announcements.map((announcement) => (
          <div key={announcement._id}>
            <div className="lg:w-[600px] bg-blue-400 min-h-[300px] p-10 overflow-auto rounded-lg">
              <h2 className="font-bold text-2xl font-heading text-white"> {announcement.title}</h2>
              <hr />
              <p className="text-white">{announcement.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Announcement;
