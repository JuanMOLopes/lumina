import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <h1 className="titulo">{props.titulo}</h1>

      <div className="user">
        <p>Rafael Sorensen</p>
        <img src="/Rafael.png" alt="foto-de-perfil" className="foto-perfil" />
      </div>
    </header>
  );
}

export default Header;
