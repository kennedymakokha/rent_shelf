
import { Outlet, useLocation } from "react-router-dom";
import Header from "../containers/layout/navbar/header";
import Footer from "../containers/Footer/footer";
import { handleurl } from "../utils/handleUrl";
<<<<<<< HEAD
import Icons from "./about/components/Icons";
=======
>>>>>>> 59fc9bed9da4654943385819c24b7321efeb484d

export default function Root() {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <div className="flex w-full h-auto flex-col overflow-x-hidden">
      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/activate" && location.pathname !== "/admin" && location.pathname !== "/admin/affiliate" && handleurl(location.pathname, 1) !== "admin" && <Header />}
      <div className=" w-full h-full relative z-0 over-flow-hidden">
        <div className=" my-0 mx-auto  min-h-[400px] p-[3rem 20px]">
          <Outlet />
          {location.pathname === "/" && <Icons />}
        </div>
        <div className="static w-full  bg-primary-100 p-[3rem 20px] bottom-0">
          {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/activate" && <Footer />}
        </div>
      </div>
=======
    <div className="flex w-full h-auto flex-col">
      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/activate" && location.pathname !== "/admin" && location.pathname !== "/admin/affiliate" && handleurl(location.pathname, 1) !== "admin" && <Header />}
      <div className=" my-0 mx-auto  min-h-[400px] p-[3rem 20px]">
        <Outlet />
      </div>
      <div className="static w-full  bg-primary-100 p-[3rem 20px] bottom-0">
        <Footer /> 
      </div>
     
>>>>>>> 59fc9bed9da4654943385819c24b7321efeb484d
    </div>
  );
}

