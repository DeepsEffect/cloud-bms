import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";
import { useState } from "react";
// import { Spinner } from "@material-tailwind/react";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  // get apartment sata
  const {
    data: apartments = [],
    // isLoading,
    // isFetching,
  } = useQuery({
    queryKey: ["apartments", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosPublic(
        `/all-apartments?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });
  // get apartments count data
  axiosPublic("/apartments-count")
    .then((res) => {
      console.log(res.data.count);
      setCount(res.data.count);
    })
    .catch((err) => {
      console.error(err);
    });

  // console.log(apartments);
  // console.log(count);
  // pagination
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handleButtonPress = (button) => {
    // console.log(button);
    setCurrentPage(button);
  };

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
      {/* {isLoading || (isFetching && <Spinner className="flex justify-center items-center border min-h-screen"/>)} */}
      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {apartments?.map((apartment) => (
          <ApartmentCard key={apartment._id} room={apartment} />
        ))}
      </section>

      {/* pagination */}
      <div className="flex flex-col lg:flex-row items-center gap-4 justify-center mt-10">
        <button
          onClick={() => {
            handleButtonPress(currentPage - 1);
          }}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-2 ">
          {pages.map((page) => (
            <div key={page}>
              <button
                onClick={() => handleButtonPress(page)}
                className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase ${
                  currentPage === page
                    ? "bg-primary-500 text-white"
                    : "bg-transparent"
                } disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                type="button"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  {page}
                </span>
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            handleButtonPress(currentPage + 1);
          }}
          disabled={currentPage === numberOfPages}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Apartment;
