
import { Outlet } from "react-router-dom";
import Header from "../containers/layout/navbar/header";
import Footer from "../containers/Footer/footer";
// import Header from "../components/Header";

export default function Root() {
  return (
    <div>
      <Header />
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