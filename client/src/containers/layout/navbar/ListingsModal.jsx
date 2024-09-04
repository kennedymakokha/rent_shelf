/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { HandleArray, HandleConsole, SelectFromAPI } from "../../../utils/selectFromapi";
import { useCreateshelveMutation, useFetchshelvesQuery } from '../../../features/slices/shelfSlice.jsx';
import { toast } from 'react-toastify';
import InputContainer, { CheckBoxContainer, SelectContainer, SelectContainerWithSearch, TextArea } from "../../input.jsx";
import MapInput from "../../maps/smallMap.jsx";
import { useFetchCategoryQuery } from "../../../features/slices/categorySlice.jsx";
import { useFetchCategorySubsQuery, useFetchsingleSubQuery } from "../../../features/slices/subcategorySlice.jsx";
import { useFetchsinglePropertyQuery } from "../../../features/slices/propertySlice.jsx";
import { MapProvider } from "../../../mapsProvider";
import { getMe, getLatLong } from "../../../utils/handleLocation.js";
import { Autocomplete } from "@react-google-maps/api";
import { initialState as init } from "../../../pages/shelves/index.jsx";
import { useFetchQuery } from "../../../features/slices/townsSlice.jsx";


const Modal = ({ showModal, setShowModal, setsubCategory, featuresArray, types, }) => {
    const [files, setFiles] = useState([])

    const [typesArr, setTypesArr] = useState([])
    const [featuresArr, setFeaturesArr] = useState([])
    const [availabletypes, setavailableTypes] = useState([])
    const [currentLocation, setCurrentLocation] = useState(true);
    const [actualname, setActualname] = useState("");
    const [origin, setorigin] = useState("");
    const [createshelve] = useCreateshelveMutation();
    const { data, } = useFetchCategoryQuery()
    const destinationRef = useRef()


    let initialState = {
        name: "",
        price: 0,
        features: [],
        dimension: "",
        building: "",
        area: "",
        sub_category_id: "",
        town_id: "",
        category_id: "",
        location: {},
        description: "",
        type_id: [],
        files: []
    }
    const [item, setItem] = useState(initialState)

    const [category_id, setCate] = useState("")
    const [availablefeatures, setavailaFeatures] = useState([])
    const [map, setMap] = useState(null)
    const { data: towns } = useFetchQuery()
    const { data: subs, refetch: fetchsubs, isSuccess } = useFetchCategorySubsQuery(category_id)
    const { data: sub, refetch: fetchsub, } = useFetchsingleSubQuery(item.sub_category_id)
    const { data: prop, refetch: fetchprop, } = useFetchsinglePropertyQuery(item.sub_category_id)
    const { data: products, refetch, isFetching, isError } = useFetchshelvesQuery(init)
    const changeInput = (e) => {
        const { name, value } = e.target ? e.target : e
        setItem(prevState => ({
            ...prevState, [name]: value
        }))

    }
    const changeTown = (town) => {
        let townObj = towns.find(e => { if (e._id === town) { return e } })
        setActualname(townObj.name)
        setItem(prev => ({ ...prev, location: townObj.location }))

    }


    const panTo = async () => {

        if (destinationRef.current.value === "" || destinationRef.current.value === undefined) return
        const directionService = new google.maps.DirectionsService()
        getLatLong(destinationRef.current.value.replace(/ /g, '+'), setorigin, map, setItem)
        // const results = await directionService.route({
        //     origin: origin,
        //     destination: destinationRef.current.value,

        //     travelMode: google.maps.TravelMode.DRIVING
        // })
    }
    const handleFileChange = (event) => {
        const fileList = event.target.files;
        setFiles([...fileList]);

        setItem(prevState => ({ ...prevState, files: fileList }))
    };
    var newTypes = [...availabletypes]
    var newFeatures = [...availablefeatures]
    const updateFieldChanged = index => {
        let newArr = [...typesArr];
        if (newTypes.includes(newArr[index]._id)) {
            const indexes = newTypes.indexOf(newArr[index]._id);
            if (indexes > -1) {
                newTypes.splice(indexes, 1);

            }
            setavailableTypes(newTypes) // return newTypes
        } else {
            newTypes.push(newArr[index]._id)
            setavailableTypes(newTypes)
        }


        newArr[index].state = !newArr[index].state
        setTypesArr(newArr);
    }
    const handlefeature = index => {
        let newArr = [...featuresArr];
        if (newFeatures.includes(newArr[index]._id)) {
            const indexes = newFeatures.indexOf(newArr[index]._id);
            if (indexes > -1) {
                newFeatures.splice(indexes, 1);
            }
            setavailaFeatures(newFeatures) // return newFeatures
        } else {
            newFeatures.push(newArr[index]._id)
            setavailaFeatures(newFeatures)
        }
        newArr[index].state = !newArr[index].state
        setFeaturesArr(newArr);
    }
    const handleCategory = async (e) => {
        // console.log(e)
        // category_id = e
        await fetchsubs()
    }
    const handleSubCategory = async (e) => {
        await fetchsub();
        await fetchprop()
        setsubCategory(e)
        HandleArray(prop)
    }
    const getName = async (lat, lng) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)
            .then(res => res.json().then(data => {
                let T = data.results[0].formatted_address.split(",")
                setActualname(`${T[T.length - 2]},${T[T.length - 1]}`)
                setItem((prevState) => ({
                    ...prevState, area: `${T[T.length - 2]},${T[T.length - 1]}`
                }))
            }).catch((e) => {
                console.log(e)
            })
            )
    }
    const getLocation = async () => {
        navigator.geolocation.getCurrentPosition(
            async position => {
                await getName(position.coords.latitude, position.coords.longitude)
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                setItem((prevState) => ({
                    ...prevState,

                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                }));
            },
            error => console.error('Error getting location:', error)
        );
    }
    const handleSubmit = async () => {
        try {
            if (item.area === "") {
                await getLocation()
            }
            for (const key in {
                name: "",
                building: "",
                town_id: "",
                description: "",
            }) {
                if (item[key] === "") {
                    return toast.error(`${key} is a required field`)
                }
            }
            item.type_id = availabletypes
            item.features = availablefeatures
            const formData = new FormData();
            for (let index = 0; index < files.length; index++) {
                formData.append("files", files[index]);
            }
            for (let index = 0; index < item.features.length; index++) {
                formData.append("features", item.features[index]);
            }
            for (let index = 0; index < item.type_id.length; index++) {
                formData.append("type_id", item.type_id[index]);
            }
            if (sub && sub.name === "office space" && item.dimension === "") {
                return toast.error(`Dimension is a required field`)
            }
            formData.append("name", item.name);
            formData.append("lat", item.location.lat);
            formData.append("lng", item.location.lng);
            formData.append("price", item.price);
            formData.append("description", item.description);
            formData.append("building", item.building);
            formData.append("area", actualname);
            formData.append("town_id", item.town_id);
            let r = await createshelve(formData)
            setItem(initialState)
            setShowModal(false);
            refetch()
            toast.success('Added successfull')
        } catch (error) {
            console.log(error)
            toast.error(error.data.message || error.message)
        }

    }
    const setLocation = (position) => {
        setItem((prevState) => ({
            ...prevState,
            location: position,
        }));
        setCurrentLocation(true)
    }
    useEffect(() => {
        setTypesArr(types)
        setFeaturesArr(featuresArray)
    }, [types, featuresArray])

    console.log(subs)
    return (
        <>

            {showModal ? (
                <>
                    <div className="flex  overflow-x-hidden  fixed top-[10%] sm:left-[1%] sm:right-[1%] z-50 outline-none focus:outline-none">
                        <div className="relative  w-full my-2 mx-auto ">
                            <div className="border-0 rounded-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between px-5 py-2 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-2xl font=semibold">New Space </h3>
                                    <div onClick={() => setShowModal(false)} className="h-8 w-8 p-1  border flex items-center justify-center rounded-full text-center text-2xl font-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="hover:text-secondary-500 text-primary-100 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="relative px-1 bg-slate-100 flex-auto">
                                    <div className=" rounded px-8 pt-6 pb-1 w-full">
                                        <div className="flex w-full  sm:flex-row flex-col ">

                                            <div className="sm:w-1/4 px-2 w-full flex flex-col">
                                                <SelectContainer
                                                    name="Categories"
                                                    array={SelectFromAPI({
                                                        array: data !== undefined && data
                                                        , name: "category_id"
                                                    })}
                                                    handleChange={async (e) => { setCate(e.target.value); await handleCategory(e.target.value) }}
                                                    placeholder="category"
                                                    label="category"
                                                    type="select"
                                                    value={item.category_id}
                                                    id="category"
                                                    required={true}
                                                />

                                                <InputContainer
                                                    name="name"
                                                    handleChange={changeInput}
                                                    placeholder=" name"
                                                    label=" Name"
                                                    type="text"
                                                    value={item.name}
                                                    id="name"
                                                    required={true}
                                                />
                                                <InputContainer
                                                    name="price"
                                                    handleChange={changeInput}
                                                    placeholder="price"
                                                    label="price"
                                                    type="number"
                                                    value={item.price}
                                                    id="price"
                                                // required={true}
                                                />
                                                <InputContainer
                                                    name="building"
                                                    handleChange={changeInput}
                                                    placeholder="building"
                                                    label="building"
                                                    type="text"
                                                    value={item.building}
                                                    id="building"
                                                    required={true}
                                                />
                                            </div>

                                            <div className="sm:w-1/2 px-2 w-full flex-col flex">
                                                {isSuccess && subs !== undefined && < SelectContainer
                                                    name="Sub Categories"
                                                    array={SelectFromAPI({
                                                        array: subs
                                                        , name: "sub_category_id"
                                                    })}
                                                    handleChange={async (e) => { await handleSubCategory(e.target.value); setItem(prevState => ({ ...prevState, sub_category_id: e.target.value })) }}
                                                    placeholder="Sub category"
                                                    label="Sub category"
                                                    type="select"
                                                    value={item.category_id}
                                                    id="sub category"
                                                    required={true}
                                                />}
                                                {sub && sub.name === "office space" && <InputContainer
                                                    name="dimension"
                                                    handleChange={changeInput}
                                                    placeholder="Space dimension eg 50* 100"
                                                    label="Dimension"
                                                    type="text"
                                                    value={item.dimension}
                                                    id="dimension"
                                                    required={true}
                                                />}

                                                <div className={`flex flex-row  gap-2 flex-wrap my-1`}>
                                                    <TextArea
                                                        name="description"
                                                        handleChange={changeInput}
                                                        placeholder="description"
                                                        label="description"
                                                        type="text"
                                                        value={item.description}
                                                        id="description"
                                                        required={true}
                                                    />
                                                </div>

                                                <label className="block text-primary-500 capitalize text-[18px] ml-1  font-semibold mb-1">
                                                    Features
                                                </label>
                                                <div className="flex flex-row  gap-2 flex-wrap my-1">
                                                    {featuresArr.map((feature, i) => (
                                                        <div key={i}
                                                            onClick={() => handlefeature(i)}
                                                            className={`flex items-center text-[15px] ${feature.state !== true ? "border border-primary-300 text-primary-100  " : "border text-slate-400 border-slate-400  "} rounded-md justify-center px-2`}>{feature.name}</div>
                                                    ))}
                                                </div>



                                            </div>
                                            <div className="sm:w-1/4 px-2 w-full flex-col flex">
                                                <SelectContainerWithSearch
                                                    name="Town"
                                                    array={SelectFromAPI({
                                                        array: towns
                                                        , name: "town_id"
                                                    })}
                                                    handleChange={async (e) => { await changeTown(e.target.value); setItem(prevState => ({ ...prevState, town_id: e.target.value })); }}
                                                    placeholder="town"
                                                    label="town"
                                                    type="select"
                                                    value={item.town_id}
                                                    id="town"
                                                    required={true}
                                                />
                                                {/* <MapP */}
                                                {actualname === "" ? <div className='flex flex-col'>
                                                    <CheckBoxContainer title="Use my current location" checked={currentLocation} onClick={() => setCurrentLocation(prevState => (!prevState))} />
                                                    <CheckBoxContainer title="Enter Actual Location" checked={!currentLocation} onClick={() => setCurrentLocation(prevState => (!prevState))} />
                                                </div> : <MapProvider>
                                                    <Autocomplete>
                                                        <>
                                                            <label className="block text-primary-500 capitalize text-[18px] ml-1  font-semibold mt-4">
                                                                Location
                                                            </label>
                                                            <div className={`rounded-md appearance-none my-2  h-9  items-center  flex w-full bg-white  border border-gray-300 placeholder-gray-500 text-gray-500  focus:border-secondary-100 focus:z-10 sm:text-sm`}>
                                                                <input type="text" ref={destinationRef} className="flex w-full px-2 focus:outline-none " placeholder="Other places" />
                                                                <div onClick={() => { panTo() }} className='flex  items-center pr-2'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6   text-primary-100 cursor-pointer animate-pulse`}>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                                    </svg>

                                                                </div>
                                                            </div>
                                                        </>
                                                    </Autocomplete>
                                                </MapProvider>}



                                                <InputContainer
                                                    name="files[]"
                                                    multiple={true}
                                                    required
                                                    handleChange={handleFileChange}
                                                    placeholder="images"
                                                    label="images"
                                                    type="file"
                                                    value={item.images}
                                                    id="price"
                                                />
                                                <label className="block text-primary-500 capitalize text-[18px] ml-1  font-semibold mb-1">
                                                    Types
                                                </label>
                                                <div className={`flex flex-row  gap-2 flex-wrap my-1`}>
                                                    {typesArr.map((feature, i) => (
                                                        <div key={i}
                                                            onClick={() => updateFieldChanged(i)}
                                                            className={`flex items-center text-[15px] ${feature.state !== true ? "border border-primary-300 text-primary-100  " : "border text-slate-400 border-slate-400  "} rounded-md justify-center px-2`}>{feature.name}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-secondary-500 hover:text-primary-100 hover:border-secondary-100 border-primary-100 border rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { !currentLocation ? setCurrentLocation(true) : setShowModal(false); setCurrentLocation(true) }}
                                    >
                                        Close
                                    </button>
                                    {currentLocation ? <button
                                        className="text-white bg-primary-100 hover:bg-primary-300 hover:text-secondary-100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { handleSubmit(item) }}
                                    >
                                        Submit
                                    </button> :
                                        <button
                                            className="text-white bg-primary-100 hover:bg-primary-300 hover:text-secondary-100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => { setItem(prevState => ({ ...prevState, location: origin.location, area: origin.name })); setCurrentLocation(prev => !prev); }}
                                        >
                                            Ok
                                        </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
        </>
    );
};

export default Modal;

