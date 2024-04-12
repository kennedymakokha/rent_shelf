import { useEffect, useState } from 'react';
// import { loginFields } from "../constants/formFields";

import FormExtra from './formExtra';
import { loginFields } from './formFields';
import Input from './input';
import FormAction from './formActions';
import AuthContainer from './authContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation, useRegisterMutation, } from './../../features/slices/usersApiSlice';
import { setCredentials } from './../../features/slices/authSlice';
import { toast } from 'react-toastify';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [login, isFetching] = useLoginMutation();
    const { userInfo } = useSelector((state) => state.auth)
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            const res = await login(loginState).unwrap();
            dispatch(setCredentials({ ...res }))
            navigate('/')
        } catch (error) {
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
            heading="Login to your account"
            paragraph="Don't have an account yet?"
            linkName="Signup"
            linkUrl="/signup"
        >
            <div className="mt-8 space-y-6" >
                <div className="-space-y-px">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
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

                <FormExtra first="Remember me"
                    second="Forgot your password?" />
                <FormAction isLoading={isFetching} handleSubmit={handleSubmit} text="Login" />

            </div>
        </AuthContainer>
    )
}