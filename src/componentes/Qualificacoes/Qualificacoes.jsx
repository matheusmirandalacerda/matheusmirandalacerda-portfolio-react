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

        {/*· Desenvolvedor Backend (Softex, 276h/a, conclusão
        em dezembro/2022)<br></br> · Geração Tech Unimed-BH - Ciência de Dados (Dio.
        126h/a, conclusão em dezembro/2022)<br></br> · Comandos DML: manipulação de dados
        com MySQL (Alura, 10h/a, conclusão em 2022)<br></br> · Consultas Avançadas SQL
        com MYSQL (Alura, 14h/a, conclusão em 2022)<br></br> · Introdução ao SQL com
        MYSQL: Manipulação e Consulta de Dados (Alura, 12h/a, conclusão em 2021)<br></br>
        · Curso Básico de Gerenciamento de Projetos (Project Management
        Institute, 24h/a, conclusão em 2019)<br></br> · Excel Intensivo (CEBIP, 12 h/a,
        conclusão em 2014)*/}
        
      </section>
    </main>
  );
}

export default Qualificacoes;
