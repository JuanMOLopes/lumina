import "./TextoEsq.css";

function TextoEsquerda(props) {
  return (
    <>
      <div className="container">
        <div className="container-texto-esquerda">
          <div className="texto-esquerda">
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
          </div>
          <div className="imagem-direita">
            <img src={props.imagem} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TextoEsquerda;
