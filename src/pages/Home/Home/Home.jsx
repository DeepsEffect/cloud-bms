import Banner from "../Banner/Banner";
import Coupon from "../Coupon/Coupon";
import AboutTheBuilding from "./AboutTheBuilding/AboutTheBuilding";

const Home = () => {
    return (
        <div>
          <Banner />
          <AboutTheBuilding />
          <Coupon />
        </div>
    );
};

export default Home;