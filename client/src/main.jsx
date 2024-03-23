import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './../src/fonts/LexendDeca-VariableFont_wght.ttf'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Errorpage from './pages/errorpage.jsx'
import Services from './pages/services.jsx'
import About from './pages/about'
import Root from './pages/root.jsx'
import ShelveDetails from './pages/shelves/shelveDetails/details'
import Shelves from './pages/shelves'
import Warehouse from './pages/shelfTypes'
import Chats from './pages/chats.jsx'
const rootFontStyle = {
  fontSize: '20px',
  fontFamily: "RalewayDots-Regular",
  color: ' rgb(71, 84, 103)'
}

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shelves/:name",
        element: <ShelveDetails />,
      },
      {
        path: "shelves",
        element: <Shelves />,
      },
      {
        path: "shelves-type/:name",
        element: <Warehouse />,
      },
      {
        path: "shelves-in/:name",
        element: <Warehouse />,
      },
      {
        path: "chats",
        element: <Chats />,
      },
      // {
      //   path: "web-design",
      //   element: <WebDesign />,
      // },
      // {
      //   path: "web-dev",
      //   element: <WebDev />,
      // },
      // {
      //   path: "frontend",
      //   element: <Frontend />,
      // },
      // {
      //   path: "node",
      //   element: <NodeJs />,
      // },
      // {
      //   path: "php",
      //   element: <Php />,
      // },
      // {
      //   path: "seo",
      //   element: <SEO />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div style={rootFontStyle}>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
