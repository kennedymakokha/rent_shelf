import React from 'react'
import Underline from './underline.png'
function TitleContainer(props) {
    return (
        <div className={`flex flex-col w-auto ${props.left ? " px-2 items-start justify-center" : "items-center justify-center"}`}>
            <div className={`${props.left ? "sm:text-2xl text-xl" : "text-2xl"} text-secondary-100`}>{props.title}</div>
            <img src={Underline} className={` w-20 ${props.left && "hidden"}`} alt='' />
        </div>
    )
}

export default TitleContainer