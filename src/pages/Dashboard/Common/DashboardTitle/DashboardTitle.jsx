import CouponModal from "../../Modal/CouponModal";

/* eslint-disable react/prop-types */
const DashboardTitle = ({ title, measure, coupons }) => {
  return (
    <section className="min-h-32 uppercase bg-accent-500 text-center font-bold text-white flex flex-col justify-center items-center text-xl font-heading ">
      <h2>
        {title}: {measure?.length}
      </h2>
      {coupons && (
        <>
          <CouponModal />
        </>
      )}
    </section>
  );
};

export default DashboardTitle;
