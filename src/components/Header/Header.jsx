import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>

      <div className="info-perfil">
        <img src="../../../public/Rafael.png" alt="foto-de-Perfil" className="perfil" />
        <span className="txt">Rafael Sorensen - Física</span>
      </div>
    </header>
  );
}

export default Header;
