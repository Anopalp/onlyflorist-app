import { useRef } from "react";
import { Menu, Close } from "@mui/icons-material";
import "./navbarStyles.css";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

function NavbarManajer() {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogout = () => {
    const logOut = async () => {
      const { error } = await supabase.auth.signOut();
      navigate("/");
    };
    logOut();
  };

  return (
    <header>
      <h2 style={{ display: "flex", fontSize: 50, fontWeight: "bold" }}>
        OnlyFlorist
      </h2>
      <nav ref={navRef}>
        <Link to="/dashboard-manajer">
          <a>Home</a>
        </Link>
        <Link to="/daftar-pengiriman-manajer">
          <a>Pengiriman</a>
        </Link>
        <Link to="/daftar-kurir">
          <a>Kurir</a>
        </Link>
        <Link to="/riwayat-pengiriman-manajer">
          <a>Riwayat</a>
        </Link>
        <Link to="/about-manajer">
          <a>About</a>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <Close style={{ fontSize: 30 }} />
        </button>
        <button className="px-3 btn btn-danger rounded-5" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <Menu style={{ fontSize: 30 }} />
      </button>
    </header>
  );
}

export default NavbarManajer;
