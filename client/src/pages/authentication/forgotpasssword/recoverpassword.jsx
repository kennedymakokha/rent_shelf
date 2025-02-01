import { useEffect, useState } from 'react';
import { recoverPassFields, forgotPassFields } from './../formFields';
import Input from './../input';
import FormAction from './../formActions';
import AuthContainer from './../authContainer';
import { useRecoverPassMutation, } from './../../../features/slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';



const fields = forgotPassFields;


let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');


const Recover = ({ setRecover }) => {
    const [recoverState, setrecoverState] = useState(fieldsState);
    const navigate = useNavigate();
    const handleChange = (e) => setrecoverState({ ...recoverState, [e.target.id]: e.target.value });

    const [recover] = useRecoverPassMutation();
    const { userInfo } = useSelector((state) => state.auth)

    const urlParams = new URLSearchParams(window.location.search);
    const affiliate = urlParams.get('affiliate');
    recoverState.ref_no = affiliate
    const handleSubmit = async () => {
        try {
            let res = await recover(recoverState).unwrap();
            toast.info('Sms sent successfully to your No')
            setRecover(true)
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
            heading="Recover password"
            paragraph="remembered Your password?"
            linkName="login"
            linkUrl="/login"
        >
            <div className="mt-8 space-y-6" >
                <div className="">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={recoverState[field.id]}
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
                    <FormAction handleSubmit={handleSubmit} text="Recover" />
                </div>
            </div>
        </AuthContainer>
    )
}

export default Recover 