import { useEffect, useState } from 'react'

import Home from './pages/home'
// import './containers/layout/navbar/style.'
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import CookieConsent from "react-cookie-consent";
import Message from './firebase/Message';
import { useSubcribeMutation } from './features/slices/FCmSlice';
import { HandleConsole } from './utils/selectFromapi';
import { io } from 'socket.io-client'
export const socket = io("http://localhost:5000");

const { VITE_APP_VAPID_KEY } = import.meta.env;
function App() {
  // const socket = io(`https://localhost:5000`);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({})
  const [subcribe] = useSubcribeMutation();
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();


    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: VITE_APP_VAPID_KEY,
      });

      //We can send token to server

      await subcribe({ token, topic: "general" }).unwrap()
      localStorage.setItem("token", token)
    } else if (permission === "denied") {
      
      HandleConsole("You denied for the notification");
    }
  }
  useEffect(() => {
    requestPermission();
    onMessage(messaging, payload => {
      setShow(true)
      setData(payload.notification)
    })


  }, []);
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
      <Home />
      <CookieConsent debug={true}>

        This site uses cookies.</CookieConsent>
      <Message show={show} data={data} setShow={setShow} />
    </>

  )
}

export default App
