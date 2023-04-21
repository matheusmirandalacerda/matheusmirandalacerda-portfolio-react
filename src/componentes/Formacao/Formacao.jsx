import React from "react";

import "./Formacao.css";

import data from "./Formacao.json";

function Formacao() {
  return (
    <main>
      <section>
        <h2>Formação</h2>
        {data.Formacao.map((item,index) => (
          <li key={index}> 
            {item.curso} {item.instituicao} {item.dataFim} 
          </li>
        ))}  
  
      </section>
    </main>
  );
}

export default Formacao;
