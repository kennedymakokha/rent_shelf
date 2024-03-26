const loginFields = [
    {
        labelText: "Email address",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "text",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address, Phone, Number or ID"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    }
]

const activationFields = [
    {
        labelText: "Code",
        labelFor: "code",
        id: "code",
        name: "code",
        type: "number",
        autoComplete: "code",
        isRequired: true,
        placeholder: "Activation Code "
    },
   
]

const signupFields = [
    {
        labelText: "Full name",
        labelFor: "name",
        id: "name",
        name: "name",
        type: "text",
        autoComplete: "name",
        isRequired: true,
        placeholder: "Full name"
    },
    {
        labelText: "Phone Number",
        labelFor: "phone",
        id: "phone",
        name: "phone",
        type: "number",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Phone Number"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm_password",
        id: "confirm_password",
        name: "confirm_password",
        type: "password",
        autoComplete: "confirm_password",
        isRequired: true,
        placeholder: "Confirm Password"
    }
]

export { loginFields,activationFields, signupFields }