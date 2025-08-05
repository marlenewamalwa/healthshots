import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // adjust path to your logo image

function Navbar() {
  return (
    <nav className="bg-[#FFFBEF] shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Health Shots Logo" className="h-25 w-auto" />
        </Link>

        {/* Links */}
        <div className="space-x-8 text-[#36441F] font-small text-lg">
          <Link to="/" className="hover:text-[#7D9457] transition">Home</Link>
          <Link to="/shop" className="hover:text-[#7D9457] transition">Shop</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
