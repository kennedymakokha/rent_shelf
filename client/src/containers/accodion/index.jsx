/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './accodion';
import './style.css'
const Accodion = ({ data, title }) => {
    const accordionData = [
        {
            title: 'Section 1',
            content: [{title:'makokha'},{title:'makokha'}]
        },
        {
            title: 'Section 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];

    return (
        <div className="">
            <div className='text-[18px]'>React Accordion Demo</div>
            {accordionData.map(({ title, content }) => (
                <Accordion key={title} title={title} content={content} />
            ))}
        </div>

    );
};

export default Accodion;