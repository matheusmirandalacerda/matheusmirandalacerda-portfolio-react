import React, { useState } from "react";

import "./Contato.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();

    console.log("Formulário enviado!");

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

    const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; //número do whatsapp para o qual a mensagem será enviada

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encondeURIComponent(
      texto
    )}`;

    window.open(linkWhatsApp, "_blank");
  }

  function mascaraTelefone(event) {
    const texto = event.target.value;
    const textoApenasNumero = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormato = textoApenasNumero.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumero.length < 11) {
      telefoneFormato = textoApenasNumero.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    setTelefone(telefoneFormato);
  }

  return (
    <main>
      <div className="formulario">
        <form onSubmit={enviarFormulario}>
            <fieldset>
              <label htmlFor="input-nome">Nome</label>
              <input
                type="text"
                name="input-nome"
                id="input-nome"
                required
                minLength="2"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="input-email">E-mail</label>
              <input
                type="email"
                email="input-email"
                id="input-email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="input-telefone">Telefone</label>
              <input
                type="telefone"
                telefone="input-telefone"
                id="input-telefone"
                placeholder="(99) 99999-9999"
                required
                pattern="^\(\d{2}\) \d{5}-\d{4}$"
                maxLength="15"
                value={telefone}
                onChange={mascaraTelefone}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="input-msg">Mensagem</label>
              <textarea
                name="input-msg"
                id="input-msg"
                cols="30"
                rows="10"
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
              ></textarea>
            </fieldset>
            <center>
            <input type="submit" value="ENVIAR" className="button" />
          </center>
            </form>

         
        
      

      <section> 
    <h2>Contato</h2>
    <p>Telefone: (81) 9 9999-0763<br></br>
    E-mail: matheus.miranda@hotmail.com<br></br>
    Github: <a target = "_blank" href = "https://github.com/matheusmirandalacerda">github.com/matheusmirandalacerda</a><br></br>
    LINKEDIN: <a target = "_blank" href = "https://www.linkedin.com/in/matheus-miranda-lacerda-93b7a61b7/">linkedin.com/in/matheus-miranda-lacerda-93b7a61b7</a></p>
    </section>
    </div>
    </main>

    
  );

}

export default Contato;