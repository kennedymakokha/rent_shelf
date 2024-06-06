import { menuItemsData } from "../menuItemsData";
import './../style.css'
import MenuItems from "./menuIttem";
const Navbar = () => {
    const depthLevel = 0;
    return (
        <nav className="desktop-nav">
            <ul className="menus">
                {menuItemsData.map((menu, index) => {
                    return (<span key={index}>
                        {!menu.mobile && <MenuItems
                            depthLevel={depthLevel}
                            items={menu}
                            key={index}
                        />}
                    </span>)
                        ;
                })}
            </ul>

        </nav>
    );
};

export default Navbar;