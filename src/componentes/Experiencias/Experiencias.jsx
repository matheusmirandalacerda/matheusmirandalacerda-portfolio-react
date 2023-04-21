import React from "react";

import "./Experiencias.css"

import data from "./Experiencias.json";

function Experiencias() {
  return (
    <main>
      <section>
      <h2>Experiências</h2>
        {data.Experiencia.map((item,index) => (
          <li key={index}> 
            <b>({item.dataInicio} - {item.dataFim})</b> {item.titulo} / {item.descricao}
          </li>
        ))}  

        
      </section>
    </main>
  );
}

export default Experiencias;
