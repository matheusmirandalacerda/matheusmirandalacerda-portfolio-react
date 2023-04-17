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

        {/*· Pós-Graduação em Administração Financeira / conclusão
        em 2020. (Unicesumar)<br></br> · Gestão Financeira / conclusão em 2020.
        (Unicesumar)<br></br> · Logística / conclusão em 2015. (UNINTER)<br></br> · Auxiliar
  Administrativo / conclusão em 2012. (SENAC)*/}
  
      </section>
    </main>
  );
}

export default Formacao;
