import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic("/apartments");
      return res.data;
    },
  });
  console.log(apartments);

  return (
    <div>
      {/* title */}
      <section className="text-center mt-10 max-w-md mx-auto">
        <h2 className="text-2xl font-bold font-heading">All available rooms</h2>
        <p>
          choose and find your rooms that suits you, available with beautiful
          views
        </p>
      </section>

      {/* cards */}
      <section></section>
    </div>
  );
};

export default Apartment;
