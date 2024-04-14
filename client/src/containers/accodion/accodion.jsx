/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex w-full text-[18px] flex-col my-1">
            <div className="flex h-6 bg-red-100 w-full  justify-between px-2  " onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="flex flex-col gap-x-1">{content.map((m, i) => (
                <div key={i} className="flex h-5 text-[18px] font-normal text-white  w-full px-2  " >
                    <div>{m.title}</div>
                </div>
            ))}</div>}
        </div>
    );
};

export default Accordion;