import { useState } from 'react'
import Home from './pages/home'
// import './containers/layout/navbar/style.'
const rootFontStyle = {
  fontSize: '18px',
  fontFamily: "RalewayDots-Regular",
  color: "#d4ebc4"
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
