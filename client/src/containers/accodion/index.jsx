/* eslint-disable react/prop-types */

import Accordion from './accodion';
import './style.css'
const Accodion = ({ data }) => {

    return (
        <div className=" w-full">
            {/* <div className='text-[18px]'>{data.title}</div> */}
            {data.map(({ title, content, url }) => (
                <Accordion key={title} title={title} url={url} content={content} />
            ))}
        </div>

    );
};

export default Accodion;