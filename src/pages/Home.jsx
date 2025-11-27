import "../App.css";
import Header from "../components/Header/Header";
import Nav from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import TextoEsq from "../components/TextoEsq/TextoEsq";
import TextoDir from "../components/TextoDir/TextoDir";

function Home() {
  return (
    <>
    <Header/>
    <Nav/>

    <div className="img-centro">
      <img src="" alt="" />
    </div>

    <TextoEsq
      titulo=""
      texto=""
      imagem=""
    />

    <TextoDir
      titulo=""
      texto=""
      imagem=""
    />

    <TextoEsq 
      titulo=""
      texto=""
      imagem=""
    />

    <TextoDir 
      titulo=""
      texto=""
      imagem=""
    />

    <TextoEsq 
      titulo=""
      texto=""
      imagem=""
    />

    <TextoDir 
      titulo=""
      texto=""
      imagem=""
    />
    <Footer />
    </>
  );
}

export default Home;