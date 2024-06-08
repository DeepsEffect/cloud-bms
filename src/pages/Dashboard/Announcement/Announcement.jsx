import DashboardTitle from "../Common/DashboardTitle/DashboardTitle";
import { Spinner } from "@material-tailwind/react";
import useAnnouncement from "../../../hooks/useAnnouncement";

const Announcement = () => {
  const [announcements, isLoading] = useAnnouncement()
  console.log(announcements);
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <DashboardTitle title={'total announcement'} measure={announcements} />
    </div>
  );
};

export default Announcement;
