import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import Portfolio from "./Portfolio.json";

function Portfolio() {
  return (
    <main>
      {/*<h2>Portfólio</h2>*/}

      {portfolio.map(
        (item, index) => 
            <ItemPortfolio
              key={index}
              link={item.link}
              image={item.image}
              title={item.title}
            ></ItemPortfolio>
      )}
    </main>
  )
}

export default Portfolio;


  /*<div className="projetos_conteudo">
        <div className="caixa">
          <a
            target="_blank"
            href="https://matheusmirandalacerda.github.io/nlw-esports-explorer/"
          >
            <img src={preview} alt="Imagem Preview" />
            <p>Projeto NLW eSports</p>
          </a>
        </div>

        <div className="caixa">
          <a
            target="_blank"
            href="https://github.com/matheusmirandalacerda/-Projeto_Conceitual_Banco_de_Dados_E-Commerce"
          >
            <img src={MySQL} alt="Projeto de Banco de Dados" />
            <p>Projeto de Banco de Dados</p>
          </a>
        </div>

        <div className="caixa">
          <a
            target="_blank"
            href="https://colab.research.google.com/github/matheusmirandalacerda/Projeto_Covid/blob/main/projeto_covid.ipynb"
          >
            <img
              src={Pandas}
              alt="Análise exploratória dos dados do COVID-19 com Python"
            />
            <p>Utilizando Pandas</p>
          </a>
        </div>
          </div>*/

