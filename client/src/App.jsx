import { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import Home from './pages/home'
import { toast } from 'react-toastify'
// import './containers/layout/navbar/style.'
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import CookieConsent from "react-cookie-consent";
import Message from './firebase/Message';
import { useSubcribeMutation } from './features/slices/FCmSlice';
import { HandleConsole } from './utils/selectFromapi';
const rootFontStyle = {
  fontSize: '18px',
  fontFamily: "RalewayDots-Regular",
  color: "#d4ebc4"
};
const { VITE_APP_VAPID_KEY } = import.meta.env;
function App() {
  const socket = io(`https://localhost:5000`);
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
      //notifications are blocked
      // await Notification.requestPermission()
      HandleConsole("You denied for the notification");
    }
  }
  useEffect(() => {
    requestPermission();
    onMessage(messaging, payload => {
      // console.log(payload)
      // console.log(messaging)
      setShow(true)
      setData(payload.notification)
    })
  

  }, []);

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
