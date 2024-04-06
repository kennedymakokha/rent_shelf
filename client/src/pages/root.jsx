
import { Outlet, useLocation } from "react-router-dom";
import Header from "../containers/layout/navbar/header";
import Footer from "../containers/Footer/footer";
// import Header from "../components/Header";

export default function Root() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname!== "/activate"  && location.pathname!== "/admin" && location.pathname!== "/admin/affiliate" && <Header />}
      <div className=" my-0 mx-auto p-[3rem 20px]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

// max-width: 1200px;
// margin: 0 auto;
// padding: 3rem 20px;