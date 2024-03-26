import React, { useState } from 'react'
import Header from './header.jsx'
import Login from './login.jsx'
import Signup from './signup.jsx'
import Bg from './Content creator-bro.webp'
import Activate from './activate.jsx'


function AuthContainer(props) {

    const initialState = {
        heading: "Login to your account",
        paragraph: "Don't have an account yet?",
        linkName: "Signup",
        linkUrl: "",
    }
    const signUp = () => {
        setScreen("register")

        if (screen === "login") {
            setHeaderDetails({
                heading: "Sign Up ",
                paragraph: "Already have an account",
                linkName: "Login",
                linkUrl: "",
            })
        } else {
            setScreen("register")
            setHeaderDetails(initialState)
        }
    }
    const [headerdetails, setHeaderDetails] = useState(initialState)

    const [screen, setScreen] = useState("login")
    const { heading, paragraph, linkName, linkUrl } = props
    return (
        <div className="min-h-full relative  z-0 h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <img src={Bg} alt='' />
            <div className="max-w-md absolute bg-white opacity p-8  w-full space-y-8 z-20">
                <><Header
                    heading={heading}
                    paragraph={paragraph}
                    linkName={linkName}
                    linkUrl={linkUrl}
                    change={signUp}

                />
                    {props.children}
                </>
            </div>
        </div>

    )
}


export default AuthContainer