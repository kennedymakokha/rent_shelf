import React, { useRef } from 'react'
import FeaturedCard from './components/featuredCard'
import Contents from '../contents'
import TitleContainer from '../../../containers/titleContainer'
import { FeaturedArray } from '../../data'
import { Link } from 'react-router-dom'
import ScrollRight from './scrollRight'

function index(props) {
    const titleRef = useRef();
    
    return (<>

        <ScrollRight title="Featured Shelves" data={props?.data} isFetching={props?.isFetching} array={FeaturedArray} text="text-secondary-100" bgcontainer="bg-slate-100" bg="bg-primary-100" showDetails />


    </>

    )
}

export default index