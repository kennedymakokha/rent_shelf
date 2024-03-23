// Navbar.js 
"use client"; // for nextjs 13.4 users
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#products", label: "Products" },
        { href: "#contact-us", label: "Contact Us" },
    ];
    return (
        <>
            <header className="sm:px-8 px-4 py-2 z-10 fixed top-0 bg-white shadow-md w-full">
                <nav className="flex justify-between items-between max-container">
                    <a href="/" className="text-3xl font-bold">
                        Logo
                    </a>
                    <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-bold   leading-xl  text-lg text-slate-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                        <a href="/">Sign in</a>
                        <span>/</span>
                        <a href="/">Explore now</a>
                    </div> */}
                    <div
                        className="hidden max-lg:block cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        <div
                            className=" right-0  px-1 py-1 cursor-pointer">
                            <RxHamburgerMenu className="text-2xl" /></div>
                    </div>
                </nav>
            </header>
            {isMenuOpen && (
                <div>
                    <nav className="fixed top-0 right-0 bottom-0 lg:bottom-auto bg-transparent  w-auto  ">
                        <div
                            className="hidden max-lg:block fixed right-3 top-1  bg-slate-100 px-1 py-1 cursor-pointer"
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            <AiOutlineClose className="text-2xl" />
                        </div>
                        <div className=" lg:hidden flex-row flex justify-end items-end px-2 h-auto  w-auto float-right">
                            <ul className=" lg:hidden flex flex-col items-start justify-center h-auto mt-10  ">
                                {navLinks.map((item) => (
                                    <li key={item.label} className="w-full my-1 px-2 rounded-sm shadow-xl bg-slate-300">
                                        <a
                                            href={item.href}
                                            className="font-montserrat  w-full leading-normal text-lg text-left text-slate-gray"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </nav>
                </div>
            )}
        </>
    );
};
export default Navbar;
