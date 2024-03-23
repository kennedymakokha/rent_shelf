
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './style.css'
import Logo from './logo.png'
import MobileNav from './components/MobileNav.jsx';
const Header = () => {
  return (
    <header>
      <div className="nav-area ">
        <Link to="/" className="logo">
          <img src={Logo} alt='' className='h-14' />
        </Link>
        <Navbar />
        <MobileNav />
      
      </div>
    </header>
  );
};

export default Header;