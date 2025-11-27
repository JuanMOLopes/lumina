import "./Footer.css";
import GitHub from "/GitHub.png";
import Logo from "/logo.png"

function Footer() {
  return (
    <footer>
      <div id="contato">
        <a href="https://github.com/JuanMOLopes/lumina.git">
          <img src={GitHub} alt="GitHub" />
          GitHub
        </a>
        <p>
          <strong>Contato:</strong> GroupTwoDevelopers@contact.com
        </p>
      </div>
      <div className="lado-a-lado">
        <div id="sobre">
          <h3>Sobre</h3>
          <div className="links">
            <a href="">Políticas de Privacidade;</a>
            <a href="">Termos de Uso;</a>
          </div>
        </div>

      </div>
      <div className="logo">
        <img src={Logo} alt="" className="logo"/>
      </div>
      <div className="lado-a-lado">
        <div>
            <p className="copyright">© Grupo 2 - Todos os direitos reservados</p>
        </div>
        <div>
            <ul>
                <li>Agatha Aline França</li>
                <li>Ana Beatriz Farias Pereira</li>
                <li>Juan Matheus de Oliveira Lopes</li>
                <li>Lucas Aguiar Pereira Marin</li>
                <li>Zayra Alice França</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;