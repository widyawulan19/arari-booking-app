import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import '../../styles/Landing/navbar.css'
import PreviewModal from "../../components/PreviewModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);

  const handleOpenPreviewModal = () =>{
    setPreviewModal(true)
  }

  const closePreviewModal = () =>{
    setPreviewModal(!previewModal)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LEFT MENU (DESKTOP) */}
        <div className="nav-left">
          {/* <Link to="/schedule">Jadwal</Link>
          <Link to="/pricing">Harga</Link> */}
          <Link>Arari Sport</Link>
        </div>

        {/* LOGO */}
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="nav-right">
          <Link className="btn-text" onClick={handleOpenPreviewModal}>Login</Link>
          <Link onClick={handleOpenPreviewModal} className="btn-outline">Join Member</Link>
          <Link onClick={handleOpenPreviewModal} className="btn-primary">Booking</Link>

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
          <Link onClick={handleOpenPreviewModal}>Login</Link>
          <Link onClick={handleOpenPreviewModal}>Join Member</Link>
          <Link onClick={handleOpenPreviewModal} className="mobile-booking">Booking</Link>
        </div>
      )}

      {/* MODAL  */}
      {previewModal &&(
        <PreviewModal
          onClose={closePreviewModal}
          isOpen={handleOpenPreviewModal}
        />
      )}
    </header>

  );
};

export default Navbar;
