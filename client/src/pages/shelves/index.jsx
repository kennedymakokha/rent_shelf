/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Contents from '../home/contents'
import Shelves from './../../assets/logo.png'
import { socket } from '../../App'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice'
import { useFetchQuery } from '../../features/slices/townsSlice'
import { useFetchTownAreasQuery } from '../../features/slices/areaSlice'
import { HandleArray } from '../../utils/selectFromapi'
import ErrorImage from './error.gif'
import { Multiple } from '../../utils/multiple'
import { useFetchTypeQuery } from '../../features/slices/typeSlice'

import { FilterItem, FilterItemLoader, FilterTitle, ShelveComponent, ShelveLoader } from './components'
import ErrorModal from '../../containers/errorModal'
// import { useFetchFeatureQuery } from '../../features/slices/featureSlice'
// eslint-disable-next-line react-refresh/only-export-components
export const initialState = {
  town: undefined,
  type: undefined,
  featured: false,
  warehouse: false,
  category: undefined,
  subcategory: undefined,
  skip: 0,
  limit: 1
}

function Index() {
  const [town, setTown] = useState({})
  const [area, setArea] = useState({})
  // const [featured, setfeatured] = useState(false)
  const [item, setItem] = useState(initialState)
  const [townsArr, settowns] = useState([])
  // const [areasArr, setAreas] = useState([])
  const [typesArr, settypes] = useState([])
  let paths =
    [
      { title: "shelves", path: 'shelves' },
      // { title:"hOME", path: `shelves/${data?.name?.replace(/\s+/g, "-").toLowerCase()}` }
    ]
  const { data, refetch, isFetching, isSuccess, isError } = useFetchshelvesQuery(item)
  const { data: towns, isFetching: townFeching } = useFetchQuery()
  const { data: areas, isFetching: areaFetching, } = useFetchTownAreasQuery(town._id)
  const { data: types, } = useFetchTypeQuery()
  // const { data: features, isSuccess: fearesuccess, } = useFetchFeatureQuery()
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
  // const handleArea = index => {
  //   let newArr = [...AreaArray];
  //   const temp = AreaArray.map((item) => {
  //     if (index === item._id) {
  //       setItem(prevState => ({
  //         ...prevState, area: item._id
  //       }))
  //       item.state = !item.state
  //       refetch()
  //       return { ...item, state: true };
  //     } else {
  //       return { ...item, state: false };
  //     }
  //   });
  //   AreaArray = temp
  //   newArr[index].state = !newArr[index].state
  //   AreaArray = newArr
  // }

  useEffect(() => {
    settowns(TownsArray)
    settypes(TypesArray)
    refetch()
    socket.on("publishing", () => {
      refetch()

    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className=' w-[12%] h-auto  pt-1  sm:flex hidden flex-col '>
            <FilterTitle topRounded title="towns" />
            <div className='flex m-2 flex-col gap-y-2 overflow-hidden'>
              {townFeching || !isSuccess ? <Multiple count={7} col body={<FilterItemLoader />} />
                : townsArr !== undefined && townsArr.map((town, i) => (
                  <FilterItem key={i} data={town} onChange={() => { changeTown(town); handleTowns(town._id) }} />
                ))}
            </div>
            {/* {areas && <FilterTitle title="Areas" />}
            <div className=' w-full   flex flex-row overflow-x-hidden scrollbar-hide'>
              <div className='flex m-2 flex-col gap-y-2'>
                {areaFetching ? <Multiple count={7} col body={<FilterItemLoader />} />
                  : AreaArray.map((area, i) => (
                    <FilterItem key={i} data={area} onChange={() => {
                      setArea(area); handleArea(area._id); setItem(prevState => ({
                        ...prevState, area: area._id
                      }))
                    }} />
                  ))}
              </div>
            </div> */}
            <FilterTitle title="Featured" />
            <div className='flex m-2 flex-col gap-y-2'>
              {!isSuccess ? <Multiple count={1} col body={<FilterItemLoader />} /> :
                <FilterItem data={{ name: "Featured", state: item.featured }} onChange={() => {
                  // setfeatured(prevState => (!prevState)); 
                  setItem(prevState => ({
                    ...prevState, featured: !prevState.featured
                  }))
                }} />}
            </div>
            <FilterTitle title="Werehouse" />
            <div className='flex m-2 flex-col gap-y-2'>
              {!isSuccess ? <Multiple count={1} col body={<FilterItemLoader />} /> :
                <FilterItem data={{ name: "Warehouses" }} onChange={() => { changeTown(town); handleTowns(town._id) }} />}
            </div>
            <FilterTitle title="Types" />
            <div className='flex m-2 flex-col gap-y-2'>
              {!isSuccess ? <Multiple count={7} col body={<FilterItemLoader />} />
                : typesArr !== undefined && typesArr.map((type, i) => (
                  <FilterItem key={i} data={type} onChange={() => { handleTypes(type._id) }} />
                ))}
            </div>
          </div>
          <div className=' h-auto sm:w-[88%] rounded-md w-fullh-full   flex-wrap flex   '>
            {isSuccess && data && data.length === 0 && <div className="flex w-full ">
              <img src={ErrorImage} alt='' className='w-full h-1/4 object-cover' />
            </div>}
            {isFetching || !isSuccess ? <ShelveLoader /> :
              data !== undefined && data?.map((dat, i) => (
                <ShelveComponent key={i} dat={dat} />
              ))}
          </div>

        </div>
      </div>
      <ErrorModal show={isError} />
    </Contents>
  )
}

export default Index
