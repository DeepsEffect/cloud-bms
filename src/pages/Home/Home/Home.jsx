import Banner from "../Banner/Banner";
import Coupon from "../Coupon/Coupon";
import Location from "../Location/Location";
import AboutTheBuilding from "./AboutTheBuilding/AboutTheBuilding";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutTheBuilding />
      <Coupon />
      <Location />
    </div>
  );
};

export default Home;
