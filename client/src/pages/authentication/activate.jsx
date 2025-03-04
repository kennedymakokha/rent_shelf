import { useEffect, useState } from 'react';
// import { loginFields } from "../constants/formFields";

import FormExtra from './formExtra';
import { activationFields } from './formFields';
import Input from './input';
import FormAction from './formActions';
import AuthContainer from './authContainer';
import { useActivateMutation, useResendactivateMutation } from '../../features/slices/usersApiSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFetchusersmslogsQuery } from '../../features/slices/logsSlice';


const fields = activationFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Activate() {
    const [activateState, setActivateState] = useState(fieldsState);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setActivateState({ ...activateState, [e.target.id]: e.target.value })
    }
    const { userInfo } = useSelector((state) => state.auth)
    const [resend] = useResendactivateMutation({ id: localStorage.getItem("RegId") });
    const [activate] = useActivateMutation();
    const { data, refetch } = useFetchusersmslogsQuery(localStorage.getItem("RegId"));

    const handleSubmit = async () => {
        try {
            activateState.id = localStorage.getItem("RegId")
            await activate(activateState)
            localStorage.removeItem("RegId")
            localStorage.removeItem('activated')
            navigate('/login')
            toast.info('activated')
            return
        } catch (error) {
            alert("error")
            console.log("error")
            // toast.error(error.message)
        }
    }


    const handleResend = async () => {
        try {
            activateState.id = localStorage.getItem("RegId")
            await resend(activateState)
            await refetch()
            // localStorage.removeItem("RegId")
            // localStorage.removeItem('activated')
            // navigate('/login')
            toast.info('Key sent again')
            return
        } catch (error) {
            alert("error")
            console.log("error")
            // toast.error(error.message)
        }
    }

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    })
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

                <FormExtra ndAction={handleResend} second={`Resend Code ${3 - data?.length} More times today`} />
                <FormAction handleSubmit={handleSubmit} text="Activate" />

            </div>
        </AuthContainer>
    )
}