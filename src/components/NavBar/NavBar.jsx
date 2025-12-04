import { Link } from "react-router-dom";

import "./NavBar.css";
import BotaoTema from "../BotaoTema/BotaoTema";

export default function NavBar() {
  return (
    <nav className="sidebar">
      <BotaoTema />

      <Link to="/">
        <img src="/Logo.png" alt="logo" />
      </Link>

      <ul className="sidebar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projeto-e-grupo">Projeto & grupo</Link>
        </li>
      </ul>
    </nav>
  );
}
