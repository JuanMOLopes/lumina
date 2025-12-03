import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <img src="/logo.png" alt="Logo" className="logo-img" />
            <h2 className="logo-text">Lumina</h2>
          </div>

          <h1 className="title">PLANNER DE AULAS</h1>

          <div className="topbar-right">
            <img src="/icon.png" alt="Ícone" className="icon-img" />
          </div>
        </div>
      </header>

      <nav className="navbar-menu">
        <ul>
          <li><a href="/index">HOME</a></li>
          <li><a href="/projeto">PROJETO & GRUPO</a></li>
        </ul>
      </nav>
    </>
  );
}