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
        <div className="perfil">img</div>
        <span className="txt">texto</span>
      </div>
    </header>
  );
}

export default Header;
