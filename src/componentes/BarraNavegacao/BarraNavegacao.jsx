import React from "react";

import { Link } from 'react-router-dom';

import "./BarraNavegacao.css"

function BarraNavegacao () {
    return (
        <nav>
          <ul>
            <li className="button"><Link to="/">Início</Link></li>
            <li className="button"><Link to="/formacao">Formação</Link></li>
            <li className="button"><Link to="/experiencias">Experiências</Link></li>
            <li className="button"><Link to="/qualificacoes">Qualificações</Link></li>
            <li className="button"><Link to="/portfolio">Portfólio</Link></li>
            <li className="button"><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
    );
};



export default BarraNavegacao