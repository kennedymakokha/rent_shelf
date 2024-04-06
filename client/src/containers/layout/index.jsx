import React from "react";
import Navbar from "./layout";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";
import Header from "./navbar/header";
export default function page(props) {
    let h = 0.76638176638176 * window.innerHeight
   
    return (
        <>
            {/* <Navbar /> */}
            <Header />
            <main>
                <div className={`h-auto min-h-[538px] bg-slate-100 px-10 pt-[70px]`}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
        // <div className="h-auto min-h-screen bg-red-200">
        //     <Navbar />
        //     {props.children}
        // </div>
    );
}