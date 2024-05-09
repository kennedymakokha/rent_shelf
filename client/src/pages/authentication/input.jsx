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
            className={` h-3.5 w-3.5 flex items-center  justify-center  text-green-200}`}
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d={show ? "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" : "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"}
            />
          </svg>
        </div>}
      </div>

    </div>
  )
}