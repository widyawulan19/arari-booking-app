import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import '../../styles/Landing/navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LEFT MENU (DESKTOP) */}
        <div className="nav-left">
          <Link to="/schedule">Jadwal</Link>
          <Link to="/pricing">Harga</Link>
        </div>

        {/* LOGO */}
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="nav-right">
          <Link to="/login" className="btn-text">Login</Link>
          <Link to="/register" className="btn-outline">Daftar</Link>
          <Link to="/courts" className="btn-primary">Booking</Link>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/schedule">Jadwal</Link>
          <Link to="/pricing">Harga</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Daftar</Link>
          <Link to="/courts" className="mobile-booking">Booking</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
