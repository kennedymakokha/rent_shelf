import { useEffect, useState } from 'react';
import { recoverPassFields, forgotPassFields } from './../formFields';
import Input from './../input';
import FormAction from './../formActions';
import AuthContainer from './../authContainer';
import { useResetPassMutation, } from './../../../features/slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';



const fields = recoverPassFields;

let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');
let fieldsState2 = {};

export default function Reset() {
    const [resetState, setResetState] = useState(fieldsState);
    const navigate = useNavigate();
    const handleChange = (e) => setResetState({ ...resetState, [e.target.id]: e.target.value });

    const [reset] = useResetPassMutation();
    const { userInfo } = useSelector((state) => state.auth)

    const urlParams = new URLSearchParams(window.location.search);
    const affiliate = urlParams.get('affiliate');
    resetState.ref_no = affiliate
    const handleSubmit = async () => {
        try {
            let res = await reset(resetState).unwrap();
            localStorage.setItem("activated", false)
            localStorage.setItem("RegId", res._id)
            toast.info('Password reset complete')
            navigate('/login')
        } catch (error) {

            toast.error(error.data.message)
        }

    }

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    })
    console.log(resetState)
    return (
        <AuthContainer
            heading="Reset password"
            paragraph="Enter the code sent to your phone ?"
            // linkName="login"
            // linkUrl="/login"
        >
            <div className="mt-8 space-y-6" >
                <div className="">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={resetState[field.id]}
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
                    <FormAction handleSubmit={handleSubmit} text="Reset" />
                </div>
            </div>
        </AuthContainer>
    )
}