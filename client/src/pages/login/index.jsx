import React from 'react'
import Header from './header'
import Login from './login.jsx'
import Signup from './signup.jsx'
import Bg from './Content creator-bro.svg'

function index() {
    return (


        <div className="min-h-full relative  z-0 h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <img src={Bg} alt='' />
            <div className="max-w-md absolute bg-white opacity p-8  w-full space-y-8 z-20">
                <><Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                    <Login />
                </>
            </div>
            

        </div>

    )
}

{/* <div class="w-full h-screen bg-gray-200 flex justify-center items-center">
    <div class="bg-gray-400 w-96 h-96 relative z-0">
        <p class="italic text-bold bd-red-100 font-serif">Map</p>
        <div class="absolute inset-0 flex justify-center items-center z-10">
            <p class="text-2xl font-bold">This should be on top of the map</p>
        </div>
    </div>
</div> */}
export default index