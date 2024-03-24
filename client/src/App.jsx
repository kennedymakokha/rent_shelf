import { useState } from 'react'
import Home from './pages/home'
// import './containers/layout/navbar/style.'

import CookieConsent from "react-cookie-consent";
const rootFontStyle = {
  fontSize: '18px',
  fontFamily: "RalewayDots-Regular",
  color: "#d4ebc4"
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <CookieConsent debug={true}>
        
        This site uses cookies.</CookieConsent></>

  )
}

export default App
