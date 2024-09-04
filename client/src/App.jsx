import { createContext, useEffect, useState } from 'react'

import Home from './pages/home'
// import './containers/layout/navbar/style.'
import Cookie from './assets/Mail.gif'
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import CookieConsent from "react-cookie-consent";
import Message from './firebase/Message';
import { useSubcribeMutation } from './features/slices/FCmSlice';
import { HandleConsole } from './utils/selectFromapi';
import { io } from 'socket.io-client'
import { MapProvider } from './mapsProvider';
export const socket = io("https://rent-space.onrender.com");
export const ThemContext = createContext(null)
const { VITE_APP_VAPID_KEY } = import.meta.env;
function App() {
  // const socket = io(`https://localhost:5000`);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState({})
  const [subcribe] = useSubcribeMutation();

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }
  // async function requestPermission() {
  //   //requesting permission using Notification API
  //   const permission = await Notification.requestPermission();


  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey: VITE_APP_VAPID_KEY,
  //     });

  //     //We can send token to server

  //     await subcribe({ token, topic: "general" }).unwrap()
  //     localStorage.setItem("token", token)
  //   } else if (permission === "denied") {

  //     HandleConsole("You denied for the notification");
  //   }
  // }
  // useEffect(() => {
  //   requestPermission();
  //   onMessage(messaging, payload => {
  //     setShow(true)
  //     setData(payload.notification)
  //   })


  // }, []);
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
    socket.on("disconnect", () => {
      // console.log(socket.id); // undefined
    });
  }, [])


  return (
    <>
      <MapProvider>
        <ThemContext.Provider value={{ theme, toggleTheme }}>
          <Home />
          <CookieConsent
            style={{ width: "", borderRadius: '5px', backgroundColor: "transparent", display: 'flex', flexDirection: "column", marginRight: "15px", float: "right", position: 'fixed' }}
            buttonStyle={{ color: "#199e9e", borderRadius: '5px', position: "absolute", right: "0", bottom: '2px', zIndex: 120, fontSize: "13px" }}
            expires={150}
            debug={false}>
            <div className="bg-gray-400 w-[300px]  rounded-[5px] h-full relative z-0">
              <img src={Cookie} alt="" />
              <div className="absolute top-[55%] -rotate-[19deg] left-[50px]  w-full flex justify-center items-center z-20">
                <p className="text-[12px]  text-[yellow]  font-bold">
                  We use cookies to enhance your browsing experience, analyze traffic, serve ads, and personalize content in accordance with our Privacy Policy. Click 'Accept' to consent to our use of cookies.
                </p>
              </div>
              <div className="absolute rounded-[5px] opacity-50 inset-0  bg-primary-100 flex justify-center items-center z-10">
                {/* <p className="text-2xl font-bold">This should be on top of the map</p> */}
              </div>
            </div>
          </CookieConsent>
          <Message show={show} data={data} setShow={setShow} />
        </ThemContext.Provider>
      </MapProvider>
    </>

  )
}

export default App
