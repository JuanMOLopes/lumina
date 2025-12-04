import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjetoEGrupo from "./pages/ProjetoEGrupo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto-e-grupo" element={<ProjetoEGrupo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
