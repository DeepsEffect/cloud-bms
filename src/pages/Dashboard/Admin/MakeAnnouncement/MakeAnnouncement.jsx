import { Button, Input, Textarea } from "@material-tailwind/react";
import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const handleSubmitAnnouncement = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const desc = form.description.value;
    const date = new Date();
    // console.log(title, desc);
    const announcement = { title, desc, date };
    // send announcement to database
    axiosSecure
      .post("/announcement", announcement)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Added Announcement");
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <DashboardTitle title={"make announcement"} />
      <form
        onSubmit={handleSubmitAnnouncement}
        className="w-[400px] mx-auto mt-10 space-y-10"
      >
        <Input
          label="Title"
          type="text"
          name="title"
          variant="static"
          placeholder="add title"
        />
        <Textarea
          label="Description"
          type="text"
          name="description"
          maxLength={500}
          variant="static"
          placeholder="add description"
        />
        <Button className="bg-primary-500" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
