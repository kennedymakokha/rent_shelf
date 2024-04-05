
import React, { useEffect, useRef, useState } from "react";
import { menuItemsData } from "../menuItemsData";
import MobileMenuItems from "./MobileMenuItems.jsx";

const MobileNav = () => {
  const depthLevel = 0;
  const [showMenu, setShowMenu] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <nav className="mobile-nav">
      <button
        className="mobile-nav__menu-button"
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}>
        {!showMenu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>}


      </button>

      {showMenu && (
        <ul className="menus" ref={ref}>
          {menuItemsData.map((menu, index) => {
            return (
              
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;