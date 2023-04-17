import React from "react";

import "./Experiencias.css"

import data from "./Experiencias.json";

function Experiencias() {
  return (
    <main>
      <section>
      <h2>Experiência Profissional</h2>
        {data.Experiencia.map((item,index) => (
          <li key={index}> 
            <b>({item.dataInicio} - {item.dataFim})</b> {item.titulo} / {item.descricao}
          </li>
        ))}  

        {/*<li><b>{data.Experiencia[0].dataInicio} - {data.Experiencia[0].dataFim}</b> {data.Experiencia[0].titulo} / {data.Experiencia[0].descricao}</li>
        <li><b>{data.Experiencia[1].dataInicio} - {data.Experiencia[1].dataFim}</b> {data.Experiencia[1].titulo} / {data.Experiencia[1].descricao}</li>
        <li><b>{data.Experiencia[2].dataInicio} - {data.Experiencia[2].dataFim}</b> {data.Experiencia[2].titulo} / {data.Experiencia[2].descricao}</li>
        <li><b>{data.Experiencia[3].dataInicio} - {data.Experiencia[3].dataFim}</b> {data.Experiencia[3].titulo} / {data.Experiencia[3].descricao} / {data.Experiencia[3].setor}</li>
        <li><b>{data.Experiencia[4].dataInicio} - {data.Experiencia[4].dataFim}</b> {data.Experiencia[4].titulo} / {data.Experiencia[4].descricao} / {data.Experiencia[4].setor}</li>
        <li><b>{data.Experiencia[5].dataInicio} - {data.Experiencia[5].dataFim}</b> {data.Experiencia[5].titulo} / {data.Experiencia[5].descricao} / {data.Experiencia[5].setor}</li>
        <li><b>{data.Experiencia[6].dataInicio} - {data.Experiencia[6].dataFim}</b> {data.Experiencia[6].titulo} / {data.Experiencia[6].descricao} / {data.Experiencia[6].setor}</li>
        <h2>Experiência Profissional</h2>· 2023 – Unimed Caruaru | Cargo:
        Técnico Financeiro | Setor: Produção Médica<br></br> · 2021 – 2023 Unimed Caruaru
        | Cargo: Técnico Financeiro | Setor: Faturamento<br></br> · 2020 – 2021 Unimed
        Caruaru | Cargo: Técnico Administrativo | Setor: Núcleo de Cooperados<br></br> ·
        2017 – 2020 Unimed Caruaru (Caruaru-PE) | Cargo: Assistente Operacional
        | Setor: Contas de Intercâmbio<br></br> · 2014 – 2017 Trimania (Itajaí-SC) |
        Cargo: Assistente Administrativo Operacional<br></br> · 2012 – 2014 Capital Cap
        (Brasília-DF) | Cargo: Auxiliar Administrativo<br></br> · 2011 – 2012 Rodobens
        Caminhões (Caruaru-PE) | Cargo: Auxiliar Administrativo*/}
        
      </section>
    </main>
  );
}

export default Experiencias;
