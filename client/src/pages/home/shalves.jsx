import React from 'react'
import TitleContainer from '../../containers/titleContainer'
import { FeaturedArray } from '../data'
import Contents from './contents'
import FeaturedCard from './featured/components/featuredCard'
import ScrollRight from './featured/scrollRight'

function index(props) {
    return (
        <ScrollRight  data={props.data} isFetching={props.isFetching}  title="Shelves You may Like 😜"  opp feature array={FeaturedArray} text="text-primary-100" bgcontainer= "bg-white" bg="bg-slate-100" showDetails   />
    
      
    )
}

export default index