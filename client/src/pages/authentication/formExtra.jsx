export default function FormExtra(props) {
  return (
    <div className="flex items-center justify-between ">
      {props.first && <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-primary-200 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-primary-100">
          {props.first}
        </label>
      </div>}

      {props.second && <div className="text-sm">
        <a href="#" className="font-medium text-secondary-100 hover:text-primary-100">
          {props.second}
        </a>
      </div>}
    </div>

  )
}
// Remember me
// Forgot your password?