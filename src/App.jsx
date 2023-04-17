import React from "react";

import "./App.css";

import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";

import Resumo from "./componentes/Resumo/Resumo";
import Formacao from "./componentes/Formacao/Formacao";
import Experiencias from "./componentes/Experiencias/Experiencias";
import Qualificacoes from "./componentes/Qualificacoes/Qualificacoes";
//import Portfolio from "./componentes/Portfolio/Portfolio";
import Contato_Pessoal from "./componentes/Contato_Pessoal/Contato_Pessoal";
import Rodape from "./componentes/Rodape/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Cabecalho></Cabecalho>

      <BrowserRouter>

      <BarraNavegacao></BarraNavegacao>

        {/*<Routes>
          <Route index element={<Experiencias />} />
          <Route path="experiencias" element={<Experiencias />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
          <Route path="qualificacoes" element={<Qualificacoes />} />
          <Route path="formacao" element={<Formacao />} />
  </Routes>*/}

      </BrowserRouter>

      <Resumo></Resumo>
      <Formacao></Formacao>
      <Experiencias></Experiencias>
      <Qualificacoes></Qualificacoes>
      {/*<Portfolio></Portfolio>*/}
      <Contato_Pessoal></Contato_Pessoal>
      <Rodape></Rodape>
    </>
  );
}

export default App;
