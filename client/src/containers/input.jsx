/* eslint-disable react/prop-types */
import { useState } from 'react'
import { SVG, TikTok } from '../pages/about/components/components'


export function SearchContaine(props) {
    return (
        <div className='flex flex-col mx-1'>
            <label className="block text-primary-100 capitalize text-sm font-bold mb-1 flex">
                {props.label}{props.required && <span className='text-red-500 flex items-center justify-center w-4 '> * </span>}
            </label>
            {props.type === "radio" ? props.referal ?
                <input
                    type={props.type ? props.type : "text"} placeholder={props.placeholder} name={props.name}
                    onChange={props.onChange}
                    value={props.value}
                    className="shadow h-10 appearance-none text-[18px] border rounded w-full  px-1 text-black" /> : <div className='flex w-full gap-x-2 px-1'>
                    < input type="radio" name="name1" value="value1"
                        className='float-left flex text-[18px] border rounded  text-black' />
                    <span className='block text-black text-sm  mb-1 flex'>{props.label}</span>
                </div> :
                <input
                    type={props.type ? props.type : "text"} placeholder={props.placeholder} name={props.name}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    value={props.value}
                    className="shadow h-10 appearance-none text-[18px] border rounded w-full  px-1 text-black" />}
        </div>
    )
}
export const fixedInputclassName = "rounded-md h-9 appearance-none my-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 focus:z-10 sm:text-[18px] text-sm"

export const TextArea = ({ value, id, name, required, type, placeholder, label, handleChange }) => {
    return (
        <>
            <label className="block text-slate-500 uppercase text-[18px] ml-1  font-bold mb-0">
                {label}{required === true && <span className="text-red-500 px-2 text-bold">*</span>}
            </label>

            <textarea
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
export const CheckBoxContainer = ({ title, checked, onClick }) => {
    return (
        <div onClick={onClick} className='flex w-full items-center'>
            <div className='rounded-md  h-5 w-5 appearance-none my-1  relative flex items-center justify-center  border border-gray-300 placeholder-gray-500 bg-white text-gray-500 focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 focus:z-10 sm:text-sm'>
                {checked && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5.5" stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>}

            </div>
            <span className='rounded-md appearance-none my-1 mx-2 relative block w-full px-3 py-1  placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 focus:z-10 sm:text-sm'>
                {title}
            </span>
        </div>
    )
}
const InputContainer = ({ value, icon, noLabels, id, name, btnaction, required, type, placeholder, label, bg, handleChange }) => {
    return (
        <>
            {!noLabels && <label className="block text-primary-500 uppercase text-[18px] ml-1  font-bold mb-1">
                {label}{required === true && <span className="text-red-500 px-2 text-bold">*</span>}
            </label>}
            <div className={`rounded-md appearance-none my-2  h-9  items-center  flex w-full  ${bg ? `${bg} text-white px-5` : "bg-white "} border border-gray-300 placeholder-gray-500 text-gray-500  focus:border-secondary-100 focus:z-10 sm:text-sm`}>
                {icon && name === "tiktok" ? <TikTok /> : <SVG path={icon} />}
                <input
                    onChange={handleChange}
                    value={value}
                    id={id}
                    name={name}
                    multiple
                    type={type}
                    required={required}
                    className={`h-full focus:outline-none flex  ${bg} items-center focus:ring-secondary-100 px-2 rounded-md`}
                    placeholder={placeholder}
                />  {btnaction && <div onClick={btnaction} className='flex  items-center pr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </div>}
            </div>
            {/* <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}

                multiple
                type={type}
                required={required}
                className={fixedInputclassName}
                placeholder={placeholder}
            /> */}

        </>
    )
}

export const SelectContainer = ({ multiple, array, name, required, label, handleChange }) => {
    return (
        <>
            <label className="block text-primary-500 uppercase text-[18px] ml-1 font-bold mb-1">
                {label}{required === true && <span className="text-red-500 px-2 text-bold">*</span>}
            </label>
            <select multiple={multiple} className={fixedInputclassName} onChange={handleChange}>
                <option value="">Select {name}</option>
                {array?.map((arr, i) => (
                    <option key={i} value={arr.value} className="h-20">{arr.label}</option>
                ))}
            </select>
        </>
    )


}




export function SelectInput(props) {
    let { options, value, onChange } = props
    const [data, setData] = useState(options)

    console.log(setData, searchKey)

    const [searchKey, setSearchKey] = useState('')
    const [typing, setTyping] = useState(true)
    const [typingTimeout, setTypingTimeout] = useState(0)

    // function filterArrayByInput(array, searchText) {
    //     return array.filter(item => {
    //         // Convert both the item value and search text to lowercase for case-insensitive comparison
    //         const itemText = item.label.toLowerCase();
    //         const searchQuery = searchText.toLowerCase();

    //         // Check if the item contains the search text
    //         // setData(itemText.includes(searchQuery))
    //         return;
    //     });
    // }

    function filterArrayByInput(arrayOfObjects, searchText) {
        return arrayOfObjects.filter(object => {
            // Convert the object values to lowercase for case-insensitive comparison
            const objectValues = Object.values(object).map(value => {
                value?.toString()?.toLowerCase()

            });
            // console.table(objectValues(value => value.includes(searchText.toLowerCase())))
            // Check if any object value includes the search text
            return objectValues.some(value => value.includes(searchText.toLowerCase()));
        });
    }
    const changeName = (event) => {


        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setSearchKey(event)

        setTypingTimeout(
            setTimeout(function () {
                filterArrayByInput(options, event)
                setTyping(false)
            }, 1000)
        )

    }

    return (
        <div className='flex flex-col mx-1'>
            <label className="block text-primary-100 capitalize text-sm font-bold mb-1 flex">
                {props.label}{props.required && <span className='text-red-500 flex items-center justify-center w-4 '> * </span>}
            </label>
            {props.search && typing ?

                <input
                    type={props.type ? props.type : "text"} placeholder={props.placeholder} name={props.name}
                    onChange={(e) => changeName(e.target.value)}
                    value={props.value}
                    className="shadow h-10 appearance-none text-[18px] border rounded w-full  px-1 text-black" />
                : <select className="shadow h-10 appearance-none text-[18px] border rounded w-full  px-1 text-black"
                    value={value} onChange={onChange}>
                    {data.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            }

        </div>

    )
}
export function Input({ objValue, onChange, index }) {
    const { label, type, value } = objValue;
    return (
        <div className="input-group">
            <label htmlFor={label}>{label}</label>
            <div className="input">
                <input
                    type={type || "text"}
                    id={label}
                    value={value || ""}
                    onChange={(e) => onChange(e, index)}
                />
            </div>
        </div>
    );
}


export default InputContainer