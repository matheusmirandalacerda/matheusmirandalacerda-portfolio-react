import React from "react";

import "./Resumo.css";

import data from "./Resumo.json";

function Resumo() {
  return (
    <main>
      <section>
        <h2>Resumo</h2>
        <p>{data.resumo}</p>
          {/*Estou iniciando no mundo da programação, a princípio aprendendo HTML,
          CSS, JavaScript e React, mas com bastante empolgação em conhecer melhor as
          ferramentas disponíveis que esse universo da programação oferta.*/}
      </section>
    </main>
  );
}

export default Resumo;
