import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
