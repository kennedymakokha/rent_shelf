import React, { useEffect, useState } from 'react'
import Contents from '../home/contents'
import Shelves from './../../assets/logo.png'
import { FeaturedArray } from '../data'
import TitleContainer from '../../containers/titleContainer'
import { Link } from 'react-router-dom'
import { socket } from '../../App'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice'
import { useFetchQuery } from '../../features/slices/townsSlice'
import { useFetchTownAreasQuery } from '../../features/slices/areaSlice'
import { HandleArray, HandleConsole } from '../../utils/selectFromapi'
import ErrorImage from './error.gif'
import { Multiple } from '../../utils/multiple'
import { useFetchTypeQuery } from '../../features/slices/typeSlice'
import { useFetchFeatureQuery } from '../../features/slices/featureSlice'

const FilterTitle = ({ title }) => {
  return (
    <div className='w-full h-6 px-2  bg-slate-100 border border-slate-200 shadow-3xl text-xs font-bold capitalize items-center tracking-wider justify-center flex  text-primary-100'>{title}</div>
  )
}
const FilterItem = (props) => {
  const { data, onChange } = props

  return (
    <div className='gap-x-2 flex flex-row'>
      <div onClick={onChange} className='flex w-3 h-3 items-center justify-center border  border-primary-900'>{data.state ? <div className='w-full rounded-full flex h-full bg-primary-200'>
      </div> : ""}</div>
      <div className='flex  h-3 items-center justify-center text-[12px] text-slate-400 '>{data.name}</div>
    </div>
  )
}
const FilterItemLoader = () => {


  return (
    <div className='gap-x-2 flex flex-row'>
      <div className='flex w-3 h-3 items-center justify-center border  bg-slate-200  border-primary-900'></div>
      <div className='flex w-[80px] h-3 items-center justify-center text-[12px] text-slate-400 bg-slate-200 '></div>
    </div>
  )
}
function index() {
  const [town, setTown] = useState({})
  const [area, setArea] = useState({})
  const [featured, setfeatured] = useState(false)
  const [item, setItem] = useState({
    town: undefined,
    area: undefined,
    type: undefined,
    featured: false,
    warehouse: false
  })
  const [townsArr, settowns] = useState([])
  const [areasArr, setAreas] = useState([])
  const [typesArr, settypes] = useState([])
  let paths =
    [
      { title: "shelves", path: 'shelves' },
      // { title:"hOME", path: `shelves/${data?.name?.replace(/\s+/g, "-").toLowerCase()}` }
    ]
  const { data, refetch, isFetching, isSuccess, isLoading } = useFetchshelvesQuery(item)
  const { data: towns, refetch: refetchTown, isFetching: townFeching, isLoading: loadingTown } = useFetchQuery()
  const { data: areas, refetch: { refetchAreas }, isFetching: areaFetching, isSuccess: success, } = useFetchTownAreasQuery(town._id)
  const { data: types, isSuccess: typesuccess, } = useFetchTypeQuery()
  const { data: features, isSuccess: fearesuccess, } = useFetchFeatureQuery()
  let TownsArray = HandleArray(towns)
  let AreaArray = HandleArray(areas)
  let TypesArray = HandleArray(types)
  const changeTown = (town) => {
    setTown(town)
  }

  const handleTowns = index => {
    let newArr = [...townsArr];
    const temp = townsArr.map((item) => {
      if (index === item._id) {
        setItem(prevState => ({
          ...prevState, town: item._id
        }))
        item.state = !item.state
        refetch()
        return { ...item, state: true };
      } else {
        return { ...item, state: false };
      }
    });
    settowns(temp);
    newArr[index].state = !newArr[index].state
    settowns(newArr);
  }
  const handleTypes = index => {
    let newArr = [...typesArr];
    const temp = typesArr.map((item) => {
      if (index === item._id) {
        setItem(prevState => ({
          ...prevState, type: item._id
        }))
        item.state = !item.state
        refetch()
        return { ...item, state: true };
      } else {
        return { ...item, state: false };
      }
    });
    settypes(temp);
    newArr[index].state = !newArr[index].state
    settypes(newArr);
  }
  const handleArea = index => {
    let newArr = [...AreaArray];
    const temp = AreaArray.map((item) => {
      if (index === item._id) {
        setItem(prevState => ({
          ...prevState, area: item._id
        }))
        item.state = !item.state
        refetch()
        return { ...item, state: true };
      } else {
        return { ...item, state: false };
      }
    });
    AreaArray = temp
    newArr[index].state = !newArr[index].state
    AreaArray = newArr
  }

  useEffect(() => {
    settowns(TownsArray)
    settypes(TypesArray)
    socket.on("publishing", (data) => {
      refetch()

    });

  }, [towns, types])

  return (
    <Contents backDrop={Shelves} title="shelves" path={paths} bg="bg-slate-50">
      <div className="flex w-full h-auto flex-col  ">
        <div className='flex items-center w-full justify-between my-2 '>
          <div className='flex w-full items-center  justify-center text-xs  '>
            {town.name} {area.name && <>|{area.name}</>}
          </div>

        </div>
        <div className=' w-full h-full  flex flex-row '>
          <div className=' w-[12%] h-auto  pt-0 border-r border-l sm:flex hidden flex-col '>
            <FilterTitle title="towns" />
            <div className='flex m-2 flex-col gap-y-2 overflow-hidden'>
              {townFeching ? <Multiple count={7} col body={<FilterItemLoader />} />
                : townsArr !== undefined && townsArr.map((town, i) => (
                  <FilterItem data={town} onChange={() => { changeTown(town); handleTowns(town._id) }} />
                ))}
            </div>
            {areas && <FilterTitle title="Areas" />}
            <div className=' w-full   flex flex-row overflow-x-hidden scrollbar-hide'>
              <div className='flex m-2 flex-col gap-y-2'>
                {areaFetching ? <Multiple count={7} col body={<FilterItemLoader />} />
                  : AreaArray.map((area, i) => (
                    <FilterItem data={area} onChange={() => {
                      setArea(area); handleArea(area._id); setItem(prevState => ({
                        ...prevState, area: area._id
                      }))
                    }} />
                  ))}
              </div>
            </div>
            <FilterTitle title="Featured" />
            <div className='flex m-2 flex-col gap-y-2'>
              <FilterItem data={{ name: "Featured", state: item.featured }} onChange={() => {
                setfeatured(prevState => (!prevState)); setItem(prevState => ({
                  ...prevState, featured: !prevState.featured
                }))
              }} />
            </div>
            <FilterTitle title="Werehouse" />
            <div className='flex m-2 flex-col gap-y-2'>
              <FilterItem data={{ name: "Warehouses" }} onChange={() => { changeTown(town); handleTowns(town._id) }} />
            </div>
            <FilterTitle title="Types" />
            <div className='flex m-2 flex-col gap-y-2'>
              {townFeching ? <Multiple count={7} col body={<FilterItemLoader />} />
                : typesArr !== undefined && typesArr.map((type, i) => (
                  <FilterItem key={i} data={type} onChange={() => { handleTypes(type._id) }} />
                ))}
            </div>
          </div>
          <div className=' h-auto sm:w-[88%] rounded-md w-fullh-full   flex-wrap flex   '>
            {isSuccess && data && data.length === 0 && <div className="flex w-full ">
              <img src={ErrorImage} alt='' className='w-full h-1/4 object-cover' />
            </div>}
            {isFetching ? <Multiple count={4} body={
              <div className='w-[320px] h-[200px] p-1'>
                <div className='w-full h-full bg-slate-200 rounded-md'></div>
              </div>} /> :
              data !== undefined && data?.map((dat, i) => (
                <div className='w-1/4 h-[200px] p-1'>
                  <div class="group w-full h-full rounded-md relative z-0">
                    <img src={dat.files[0]} alt="" className='w-full rounded-md h-full object-cover ' />
                    <div class=" bg-black top-0  w-full h-full opacity-60 absolute group-hover:flex hidden   justify-center items-center z-10">
                    </div>
                    <div class=" bg-primary-200 rounded-t-md w-full h-8 px-2  top-0  text-slate-100 text-sm absolute flex  group-hover:hidden    justify-between items-center z-10">
                      {dat.name}{dat.featured && <div className='text-xs px-2 rounded-sm shadow-3xl bg-secondary-100'>Featured</div>}
                    </div>

                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </Contents>
  )
}

export default index

{/* <div class="group w-1/4 h-[200px] rounded-md relative z-0">
<img src={dat.files[0]} alt="" className='w-full rounded-md h-full object-cover ' />
<div class=" bg-black top-0  w-full h-full opacity-60 absolute group-hover:flex hidden   justify-center items-center z-10">

</div>
<div class=" bg-primary-200 rounded-t-md w-full h-8 px-2  top-0  text-slate-100 text-sm absolute flex  group-hover:hidden    justify-between items-center z-10">
  {dat.name}
</div>

</div> */}