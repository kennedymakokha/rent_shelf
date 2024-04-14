/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { SelectFromAPI } from "../../../utils/selectFromapi";
import { useCreateshelveMutation } from '../../../features/slices/shelfSlice.jsx';
import { toast } from 'react-toastify';
import InputContainer, { SelectContainer, TextArea } from "../../input.jsx";


const Modal = ({ showModal, changeTown, setShowModal, featuresArray, towns, types, areas, }) => {
    const [files, setFiles] = useState([])
    const [typesArr, setTypesArr] = useState([])
    const [featuresArr, setFeaturesArr] = useState([])
    const [availabletypes, setavailableTypes] = useState([])
    const [createshelve, isSuccess] = useCreateshelveMutation();
    let initialState = {
        name: "",
        price: 0,
        features: [],
        building: "",
        area_id: "",
        town_id: "",
        description: "",
        type_id: [],
        files: []
    }
    const [item, setItem] = useState(initialState)
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
            formData.append("description", item.description);
            formData.append("building", item.building);
            formData.append("area_id", item.area_id);
            formData.append("town_id", item.town_id);

            await createshelve(formData)
            setItem(initialState)
            setShowModal(false);
            toast.success('Added successfull')
        } catch (error) {
            toast.error(error.data.message || error.message)
        }

    }

    useEffect(() => {
        setTypesArr(types)
        setFeaturesArr(featuresArray)
    }, [types, featuresArray])

    return (
        <>

            {showModal ? (
                <>
                    <div className="flex  overflow-x-hidden  fixed top-[12%] sm:left-[10%] sm:right-[10%] z-50 outline-none focus:outline-none">
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
                                <div className="relative px-6 bg-slate-100 flex-auto">
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

                                                <label className="block text-primary-100 uppercase text-sm ml-1 font-bold mb-1">
                                                    Features
                                                </label>
                                                <div className="flex flex-row  gap-2 flex-wrap my-1">
                                                    {featuresArr.map((feature, i) => (
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
                                                <SelectContainer
                                                    name="Area"
                                                    array={SelectFromAPI({
                                                        array: areas
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
                                                    {typesArr.map((feature, i) => (
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
                                        className="text-secondary-500 hover:text-primary-100 hover:border-secondary-100 border-primary-100 border rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-primary-100 hover:bg-primary-300 hover:text-secondary-100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { handleSubmit(item) }}
                                    >
                                        Submit
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

