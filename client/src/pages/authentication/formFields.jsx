const loginFields = [
    {
        labelText: "Email address",
        labelFor: "email",
        id: "email",
        name: "email",
        type: "text",
        autoComplete: "email",
        isRequired: true,
        placeholder: "ID/Phone Number "
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
const forgotPassFields = [
    {
        labelText: "phone number",
        labelFor: "phone",
        id: "phone",
        name: "phone",
        type: "number",
        autoComplete: "phone",
        isRequired: true,
        placeholder: "phone number"
    },

]
const recoverPassFields = [
    {
        labelText: "Code",
        labelFor: "code",
        id: "code",
        name: "code",
        type: "number",
        autoComplete: "code",
        isRequired: true,
        placeholder: "Code "
    },
    {
        labelText: "password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
        isRequired: true,
        placeholder: "password "
    },
    {
        labelText: "confirm_password",
        labelFor: "confirm_password",
        id: "confirm_password",
        name: "confirm_password",
        type: "password",
        autoComplete: "confirm_password",
        isRequired: true,
        placeholder: "confirm password "
    }

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
        labelText: "Identification Number",
        labelFor: "ID_no",
        id: "ID_no",
        name: "ID_no",
        type: "Number",
        autoComplete: "ID_no",
        isRequired: true,
        placeholder: "ID No"
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
const listingFields = [
    {
        labelText: "Name",
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
        type: "select",
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

export { loginFields, forgotPassFields, recoverPassFields, activationFields, listingFields, signupFields }