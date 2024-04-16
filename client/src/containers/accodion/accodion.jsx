/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex w-full text-[18px] flex-col my-1">
            <div className={`flex h-6 ${isActive ? "bg-secondary-100 text-primary-100" : "bg-primary-100 text-secondary-100"} w-full  justify-between px-2`} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="flex flex-col pb-2 bg-primary-100 w-full gap-x-1">{content.map((m, i) => (
                <div key={i} className="flex h-5 text-[18px] font-normal text-white  w-full px-2  " >
                    <Link to={m.url ? m.url : null}>{m.title}</Link>
                </div>
            ))}</div>}
        </div>
    );
};

export default Accordion;