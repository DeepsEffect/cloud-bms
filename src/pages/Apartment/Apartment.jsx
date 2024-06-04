import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";

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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment._id} room={apartment} />
        ))}
      </section>
    </div>
  );
};

export default Apartment;
