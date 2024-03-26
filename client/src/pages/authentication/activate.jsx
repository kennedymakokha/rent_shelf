import { useState } from 'react';
// import { loginFields } from "../constants/formFields";

import FormExtra from './formExtra';
import { activationFields } from './formFields';
import Input from './input';
import FormAction from './formActions';
import AuthContainer from './authContainer';
import { useActivateMutation } from '../../features/slices/usersApiSlice';
import { toast } from 'react-toastify';
// import FormExtra from "./FormExtra";
// import Input from "./Input";

const fields = activationFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Activate() {
    const [activateState, setActivateState] = useState(fieldsState);

    const handleChange = (e) => {
        setActivateState({ ...activateState, [e.target.id]: e.target.value })
    }


    const [activate, isFetching] = useActivateMutation();
    const handleSubmit = async () => {
        try {
            activateState.id = localStorage.getItem("RegId")
            await activate(activateState)
            return 
        } catch (error) {
            alert("error")
            console.log("error")
            // toast.error(error.message)
        }
    }



    return (
        <AuthContainer
            heading="Activate your account"
            paragraph="Kindly enter the code sent ?"
            // linkName="Signup"
            linkUrl=""
        >
            <div className="mt-8 space-y-6" >
                <div className="-space-y-px">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={activateState[field.id]}
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
                </div>

                <FormExtra second="Resend Code" />
                <FormAction handleSubmit={handleSubmit} text="Activate" />

            </div>
        </AuthContainer>
    )
}