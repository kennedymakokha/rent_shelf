
import { Outlet, useLocation } from "react-router-dom";
import Header from "../containers/layout/navbar/header";
import Footer from "../containers/Footer/footer";
import { handleurl } from "../utils/handleUrl";

export default function Root() {
  const location = useLocation();

  return (
    <div className="flex w-full h-auto flex-col">
      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/activate" && location.pathname !== "/admin" && location.pathname !== "/admin/affiliate" && handleurl(location.pathname, 1) !== "admin" && <Header />}
      <div className=" my-0 mx-auto  min-h-[400px] p-[3rem 20px]">
        <Outlet />
      </div>
      <div className="static w-full  bg-primary-100 p-[3rem 20px] bottom-0">
        <Footer /> 
      </div>
     
    </div>
  );
}

