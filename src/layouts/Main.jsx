import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav/Nav";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="container mx-auto min-h-[calc(100svh-72px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
