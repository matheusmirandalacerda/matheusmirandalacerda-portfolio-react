import React from "react";

import "./Qualificacoes.css";

import data from "./Qualificacoes.json";

function Qualificacoes() {
  return (
    <main>
      <section>
        <h2>Qualificações</h2>
        {data.Qualificacoes.map((item,index) => (
          <li key={index}> 
            {item.curso} {item.complemento}
          </li>
        ))} 
        
      </section>
    </main>
  );
}

export default Qualificacoes;
