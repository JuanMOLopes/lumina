import "./Footer.css";
import GitHub from "/GitHub.png";
import Logo from "/Logo.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-superior">
        <div className="footer-coluna logo-e-copyright">
          <img src={Logo} alt="Lumina Logo" className="footer-logo" />
          <p className="copyright">
            © Grupo 2 - Todos os direitos reservados
          </p>
        </div>

        <div className="footer-coluna">
          <h3>Sobre</h3>
          <div className="footer-links">
            <a href="#">Políticas de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>

        <div className="footer-coluna">
          <h3>Desenvolvedores</h3>
          <ul>
            <li>Agatha Aline França</li>
            <li>Ana Beatriz Farias Pereira</li>
            <li>Juan Matheus de Oliveira Lopes</li>
            <li>Lucas Aguiar Pereira Marin</li>
            <li>Zayra Alice França</li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h3>Repositório</h3>
          <a
            href="https://github.com/JuanMOLopes/lumina.git"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub" />
            <span>Ver no GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;