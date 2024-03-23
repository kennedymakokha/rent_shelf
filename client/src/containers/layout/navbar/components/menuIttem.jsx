import { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';


const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);


    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);


    return (
        <li
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            onClick={() => {
                dropdown && setDropdown(false);
            }}
            className="menu-items" ref={ref}>

            {items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => toggleDropdown()}>
                        <Link to={items.url}>{items.title}</Link>
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}>
                        {items.title}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};
export default MenuItems;

// import Dropdown from './Dropdown';


// const MenuItems = ({ items }) => {
//     return (
//         <li className="menu-items">
//             {items.submenu ? (
//                 <>
//                     <button type="button" aria-haspopup="menu">
//                         {items.title}{' '}
//                     </button>
//                     <Dropdown submenus={items.submenu} />
//                 </>
//             ) : (
//                 <a href={items.url}>{items.title}</a>
//             )}
//         </li>
//     );
// };

// export default MenuItems;