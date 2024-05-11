/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { HandleArray, SelectFromAPI } from "../../../utils/selectFromapi";
import { useCreateshelveMutation } from '../../../features/slices/shelfSlice.jsx';
import { toast } from 'react-toastify';
import InputContainer, { CheckBoxContainer, SelectContainer, TextArea } from "../../input.jsx";
import MapInput from "../../maps/smallMap.jsx";
import { useFetchCategoryQuery } from "../../../features/slices/categorySlice.jsx";
import { useFetchCategorySubsQuery, useFetchsingleSubQuery } from "../../../features/slices/subcategorySlice.jsx";
import { useFetchsinglePropertyQuery } from "../../../features/slices/propertySlice.jsx";
import SmallMap2 from "../../maps/smallMap2.jsx";
import { getMe } from "../../../utils/handleLocation.js";


const Modal = ({ showModal, changeTown, setShowModal, setsubCategory, featuresArray, towns, types, }) => {
    const [files, setFiles] = useState([])

    const [typesArr, setTypesArr] = useState([])
    const [featuresArr, setFeaturesArr] = useState([])
    const [availabletypes, setavailableTypes] = useState([])
    const [currentLocation, setCurrentLocation] = useState(true);
    const [actualname, setActualname] = useState("");
    const [origin, setorigin] = useState("");
    const [position, setPosition] = useState({})
    const [createshelve] = useCreateshelveMutation();
    const { data, } = useFetchCategoryQuery()


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

    const [availablefeatures, setavailaFeatures] = useState([])

    const { data: subs, refetch: fetchsubs, isSuccess } = useFetchCategorySubsQuery(item.category_id)
    const { data: sub, refetch: fetchsub, } = useFetchsingleSubQuery(item.sub_category_id)
    const { data: prop, refetch: fetchprop, } = useFetchsinglePropertyQuery(item.sub_category_id)



    const changeInput = (e) => {
        const { name, value } = e.target ? e.target : e
        setItem(prevState => ({
            ...prevState, [name]: value
        }))

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
    const handleCategory = async () => {

        await fetchsubs()

    }
    const handleSubCategory = async (e) => {
        await fetchsub();
        await fetchprop()
        setsubCategory(e)
        HandleArray(prop)

    }
    const handleSubmit = async () => {
        console.log(item)
        return
        try {

            // eslint-disable-next-line no-unreachable
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
            // return
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

            await createshelve(formData)
            setItem(initialState)
            setShowModal(false);
            toast.success('Added successfull')
        } catch (error) {
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

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                getName(position.coords.latitude, position.coords.longitude)
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
    }, []);

    return (
        <>

            {showModal ? (
                <>
                    <div className="flex  overflow-x-hidden  fixed top-[10%] sm:left-[10%] sm:right-[10%] z-50 outline-none focus:outline-none">
                        <div className="relative  w-full my-2 mx-auto ">
                            <div className="border-0 rounded-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between px-5 py-2 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-2xl font=semibold">New shelf </h3>
                                    <div onClick={() => setShowModal(false)} className="h-8 w-8 p-1  border flex items-center justify-center rounded-full text-center text-2xl font-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="hover:text-secondary-500 text-primary-100 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                                {!currentLocation ? <SmallMap2 setPosition={setPosition} setorigin={setorigin} setActualname={setActualname} setCurrentLocation={setCurrentLocation} center={origin.location} origin={origin.name} onChange={setLocation} placeholder="Search the area" /> : <div className="relative px-6 bg-slate-100 flex-auto">
                                    <div className=" rounded px-8 pt-6 pb-1 w-full">
                                        <div className="flex w-full  sm:flex-row flex-col ">

                                            <div className="sm:w-1/3 px-2 w-full flex flex-col">
                                                <SelectContainer
                                                    name="Categories"
                                                    array={SelectFromAPI({
                                                        array: data !== undefined && data
                                                        , name: "category_id"
                                                    })}
                                                    handleChange={async (e) => { setItem(prevState => ({ ...prevState, category_id: e.target.value })); await handleCategory(e.target.value) }}
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
                                            <div className="sm:w-1/3 px-2 w-full flex-col flex">
                                                {isSuccess && subs !== undefined && < SelectContainer
                                                    name="Sub Categories"
                                                    array={SelectFromAPI({
                                                        array: subs
                                                        , name: "sub_category_id"
                                                    })}
                                                    handleChange={async (e) => { setItem(prevState => ({ ...prevState, sub_category_id: e.target.value })); await handleSubCategory(e.target.value) }}
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

                                                <label className="block text-slate-500 uppercase text-sm ml-1 font-bold mb-1">
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
                                            <div className="sm:w-1/3 px-2 w-full flex-col flex">
                                                <SelectContainer
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
                                                <div className='w-full px-2'>
                                                    {currentLocation ? <div className='flex flex-col'>

                                                        <CheckBoxContainer title="Enter Actual Location" checked={!currentLocation} onClick={() => { getMe(setorigin, setPosition); setCurrentLocation(prevState => (!prevState)) }} />
                                                    </div> :
                                                        <InputContainer cancel btnaction={() => { setActualname(""); setCurrentLocation((prevState) => (!prevState)) }} value={actualname} required name="Location" label="Location" placeholder="Name" handleChange={(e) => changeInput(e)} />}


                                                </div>

                                                <InputContainer
                                                    name="files[]"
                                                    multiple={true}
                                                    handleChange={handleFileChange}
                                                    placeholder="images"
                                                    label="images"
                                                    type="file"
                                                    value={item.images}
                                                    id="price"
                                                />
                                                <label className="block text-slate-500 uppercase text-sm ml-1 font-bold mb-1">
                                                    Types
                                                </label>
                                                <div className={`flex flex-row  gap-2 flex-wrap my-1`}>
                                                    {typesArr.map((feature, i) => (
                                                        <div key={i}
                                                            onClick={() => updateFieldChanged(i)}
                                                            className={`flex items-center text-[15px] ${feature.state !== true ? "border border-primary-300 text-primary-100  " : "border text-primary-100 border-slate-400  "} rounded-md justify-center px-2`}>{feature.name}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>}
                                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-secondary-500 hover:text-primary-100 hover:border-secondary-100 border-primary-100 border rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { !currentLocation ? setCurrentLocation(true) : setShowModal(false); setCurrentLocation(true) }}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-primary-100 hover:bg-primary-300 hover:text-secondary-100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { currentLocation ? handleSubmit(item) : setItem(prevState => ({ ...prevState, location: origin.location, area: origin.name })); setCurrentLocation(prev => !prev); }}
                                    >
                                        {currentLocation ? "Submit" : "Ok"}
                                    </button>
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

