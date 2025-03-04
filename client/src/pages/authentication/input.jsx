import { useState } from "react"

const fixedInputclassName = "rounded-md  flex appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass
}) {
  const [show, setShow] = useState()
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText} 
      </label>
      <div className={fixedInputclassName + customClass}>
        <input
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          type={type === "password" && show ? "text" : type}

          required={isRequired}
          className="focus:outline-none w-[95%]"
          placeholder={placeholder}
        />
        {name === "password" && <div onClick={() => setShow(prev => !prev)} className="flex justify-end  items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` h-6 w-6 flex items-center  justify-center text-slate-400 }`}
            fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            > 
            <path
              d={show ? "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" : "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}
            />
          </svg>
        </div>}
      </div>

    </div>
  )
}


// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
// </svg>

