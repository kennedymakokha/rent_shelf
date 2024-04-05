import { useEffect, useState } from 'react';
import { signupFields } from './formFields';
import Input from './input';
import FormAction from './formActions';
import AuthContainer from './authContainer';
import { useLoginMutation, useRegisterMutation, } from './../../features/slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
// import { signupFields } from "../constants/formFields"
// import FormAction from "./FormAction";
// import Input from "./Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();
  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });
  const [register, isFetching] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth)
  const handleSubmit = async (e) => {
    try {
      const res = await register(signupState).unwrap();
      localStorage.setItem("activated", false)
     
      localStorage.setItem("RegId", res._id)
      toast.info('succeful registration')
      navigate('/activate')
    } catch (error) {
      console.log(error)
      toast.error(error.data.message)
    }

  }

  useEffect(() => {
    if (userInfo) {
        navigate('/')
    }
})
  return (
    <AuthContainer
      heading="Sign Up "
      paragraph="Already have an account"
      linkName="Login"
      linkUrl="/login"
    >
      <div className="mt-8 space-y-6" >
        <div className="">
          {
            fields.map(field =>
              <Input
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />

            )
          }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </div>
    </AuthContainer>
  )
}