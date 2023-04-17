import React, { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();
    console.log("Formulário enviado!");
  }

  return (
    <main>
      {nome}
      <div classNameName="formulario">
        <form onSubmit={enviarFormulario}>
          <form action="">
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
                value = {email}
                onChange={(event) => setTelefone(event.target.value)}
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
                value = {telefone}
                onChange={(event) => setEmail(event.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="input-msg">Mensagem</label>
              <textarea
                name="input-msg"
                id="input-msg"
                cols="30"
                rows="10"
                value = {mensagem}
                onChange={(event) => setMensagem(event.target.value)}
              ></textarea>
            </fieldset>
          </form>

          <center>
            <input type="submit" value="ENVIAR" className="button" />
          </center>
        </form>
      </div>
    </main>
  );
}

export default Contato;
