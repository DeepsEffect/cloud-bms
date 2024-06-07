/* eslint-disable react/prop-types */
const DashboardTitle = ({ title, measure }) => {
  return (
    <section className="min-h-32 uppercase bg-accent-500 text-center font-bold text-white flex justify-center items-center text-xl font-heading">
      <h2>
        {title}: {measure?.length}
      </h2>
    </section>
  );
};

export default DashboardTitle;
