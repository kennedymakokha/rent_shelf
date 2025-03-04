/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";

import { toast } from 'react-toastify';
import { HandleArray, SelectFromAPI } from "../../utils/selectFromapi";
import { useCreateshelveMutation } from "../../features/slices/shelfSlice";
import { useFetchTypeQuery } from "../../features/slices/typeSlice";
import { useFetchFeatureQuery } from "../../features/slices/featureSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const fixedInputclassName = "rounded-md appearance-none my-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 focus:z-10 sm:text-sm"

const InputContainer = ({ value, id, name, required, type, placeholder, label, handleChange }) => {
    return (
        <>
            <label className="block text-primary-100 uppercase text-sm ml-1  font-bold mb-1">
                {label}{required === true && <span className="text-red-500 px-2 text-bold">*</span>}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}

                multiple
                type={type}
                required={required}
                className={fixedInputclassName}
                placeholder={placeholder}
            />
        </>
    )
}

const SelectContainer = ({ multiple, array, name, required, label, handleChange }) => {
    return (
        <>
            <label className=" w-full  text-primary-100 uppercase text-sm font-bold mb-1">
                {label}{required === true && <span className="text-red-500 px-2 text-bold">*</span>}
            </label>
            <select multiple={multiple} className={fixedInputclassName} onChange={handleChange}>
                <option value="">Select {name}</option>
                {array.map((arr, i) => (
                    <option key={i} value={arr.value} className="h-20">{arr.label}</option>
                ))}
            </select>
        </>
    )


}

const List = ({ towns, areas, isSuccess }) => {
    const [files, setFiles] = useState([])
    const [typesArr, setTypesArr] = useState([])
    const [featuresArr, setFeaturesArr] = useState([])
    const [availabletypes, setavailableTypes] = useState([])
    const [createshelve] = useCreateshelveMutation();
    // const { data: towns, refetch, isSuccess, isLoading } = useFetchQuery()
    // const { data: areas, isSuccess: success, } = useFetchAreasQuery()
    const { data: types, } = useFetchTypeQuery()
    const { data: features, } = useFetchFeatureQuery()
    const { userInfo } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    let typesArray = HandleArray(types)
    let featuresArray = HandleArray(features)
    const [item, setItem] = useState({
        name: "",
        price: 0,
        features: [],
        building: "",
        area_id: "",
        town_id: "",
        type_id: [],
        files: []

    })
    const [availablefeatures, setavailaFeatures] = useState([])


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

    const handleSubmit = async () => {
       
        try {
         
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

            formData.append("name", item.name);
            formData.append("price", item.price);

            formData.append("building", item.building);
            formData.append("area_id", item.area_id);
            formData.append("town_id", item.town_id);

            await createshelve(formData)
            setShowModal(false);
            toast.success('Added successfull')
        } catch (error) {
            toast.error(error.data.message || error.message)
        }

    }

    useEffect(() => {
        if (!userInfo) {
            navigate('login')
            toast.warning('Kindly login first')
        }
    }, [])

    return (

        <div className="flex  w-full z-50 outline-none focus:outline-none">
            <div className="  w-full my-2 mx-auto ">
                <div className="border-0 rounded-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <div className="relative sm:px-6 px-1 bg-slate-100 flex-auto">
                        <div className=" rounded px-8 pt-6 pb-1 w-full">
                            <div className="flex w-full  sm:flex-row flex-col ">

                                <div className="sm:w-1/2 px-2 w-full flex flex-col">
                                    <InputContainer
                                        name="name"
                                        handleChange={changeInput}
                                        placeholder="shelf name"
                                        label="shelf Name"
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
                                    <label className="block text-primary-100 uppercase text-sm ml-1 font-bold mb-1">
                                        Features
                                    </label>
                                    <div className="flex flex-row  gap-2 flex-wrap my-1">
                                        {featuresArray.map((feature, i) => (
                                            <div key={i}
                                                onClick={() => handlefeature(i)}
                                                className={`flex items-center text-[15px] ${feature.state !== true ? "border border-primary-300 text-primary-100  " : "border text-primary-100 border-slate-400  "} rounded-md justify-center px-2`}>{feature.name}</div>
                                        ))}
                                    </div>


                                </div>
                                <div className="sm:w-1/2 px-2 w-full flex-col flex">
                                    <SelectContainer
                                        name="Town"
                                        array={SelectFromAPI({
                                            array: isSuccess ? towns : []
                                        })}
                                        handleChange={(e) => { setItem(prevState => ({ ...prevState, town_id: e.target.value })) }}
                                        placeholder="town"
                                        label="town"
                                        type="select"
                                        value={item.town_id}
                                        id="town"
                                        required={true}
                                    />
                                    <SelectContainer
                                        name="Area"
                                        array={SelectFromAPI({
                                            array: areas !== undefined ? areas : []
                                            , name: "area_id"
                                        })}
                                        handleChange={(e) => { console.log(e.target.value); setItem(prevState => ({ ...prevState, area_id: e.target.value })) }}
                                        placeholder="town"
                                        label="town"
                                        type="select"
                                        value={item.town_id}
                                        id="town"
                                        require={true}
                                    />
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

                                    <label className="block text-primary-100 uppercase text-sm ml-1 font-bold mb-1">
                                        Types
                                    </label>
                                    <div className={`flex flex-row  gap-2 flex-wrap my-1`}>
                                        {typesArray.map((feature, i) => (
                                            <div key={i}
                                                onClick={() => updateFieldChanged(i)}
                                                className={`flex items-center text-[15px] ${feature.state !== true ? "border border-primary-300 text-primary-100  " : "border text-primary-100 border-slate-400  "} rounded-md justify-center px-2`}>{feature.name}</div>
                                        ))}
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => { handleSubmit(item) }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default List;

