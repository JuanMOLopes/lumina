import "./TextoDir.css";

function TextoDireita(props) {
  return (
    <>
      <div className="container">
        <div className="container-texto-direita">
          <div className="imagem-esquerda">
            <img src={props.imagem} alt="" />
          </div>
          <div className="texto-direita">
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextoDireita;
