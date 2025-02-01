import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './../src/fonts/LexendDeca-VariableFont_wght.ttf'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Errorpage from './pages/errorpage.jsx'
import Services from './pages/services.jsx'
import About from './pages/about'
import Contact from './pages/contacts'
import Root from './pages/root.jsx'
import Profile from './pages/profile.jsx'
import ShelveDetails from './pages/shelves/shelveDetails/details'
import Shelves from './pages/shelves'
import Warehouse from './pages/shelfTypes'
import Chats from './pages/chats.jsx'
import Listings from './pages/Listings'
import Admin from './pages/admin'
import Affiliate from './pages/admin/affiliates.jsx'
import Owners from './pages/admin/owners.jsx'
import Towns from './pages/admin/towns'
import Areas from './pages/admin/areas/index.jsx'
import OwnerDetails from './pages/admin/ownerDetails.jsx'
import ShelfDetails from './pages/admin/shelfDetails.jsx'
// import Logs from './pages/admin/logs'
import Customers from './pages/admin/users.jsx'
import Login from './pages/authentication/login.jsx'
import SignUp from './pages/authentication/signup.jsx'
import ForgotPass from './pages/authentication/forgotpasssword'
import Activate from './pages/authentication/activate.jsx'
import { store } from './store.jsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Categories from './pages/admin/categories/index.jsx'
import SubCategories from './pages/admin/subCategories.jsx'
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
        path: "about-us",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "contact-us",
        element: <Contact />,
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
        path: "services/:name/:town",
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
      {
        path: "add-listing",
        element: <Listings />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "activate",
        element: <Activate />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPass />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "admin/affiliate",
        element: <Affiliate />,
      },
      {
        path: "admin/towns",
        element: <Towns />,
      },
      {
        path: "admin/space-categories",
        element: <Categories />,
      },
      // {
      //   path: "admin/logs",
      //   element: <Logs />,
      // },
      {
        path: "admin/space-sub-categories",
        element: <SubCategories />,
      },
      {
        path: "admin/areas",
        element: <Areas />,
      },
      {
        path: "admin/customers",
        element: <Customers />,
      },
      {
        path: "admin/shelf-owners/:name",
        element: <OwnerDetails />,
      },
      {
        path: "admin/shelf-owners",
        element: <Owners />,
      },
      {
        path: "admin/shelves",
        element: <Owners />,
      },
      {
        path: "admin/shelves/:name",
        element: <ShelfDetails />,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={rootFontStyle}>
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </Provider>
  </React.StrictMode>,
)
