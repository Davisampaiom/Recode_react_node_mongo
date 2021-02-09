import React from "react";
import "./style.css";

const Envia_mensagem = () => {
  const [form, setForm] = React.useState({
    nome: "",
    mensagem: "",
  });

  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    fetch("http://localhost:3010/mensagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => {
      setResponse(res);
    });
  }

  return (
    <div className="container-fluid j">
      <form onSubmit={handleSubmit}>
        <center>
          {" "}
          <div className=" ">
            <label className="mb-1"><h4>Digite seu nome</h4></label>
            <input
              type="name"
              onChange={handleChange}
              value={form.nome}
              className="form-control "
              name="nome"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="">
            <br />
            <label className="mb-1"><h4>Deixe sua mensagem aqui!</h4></label>
            <textarea
              className="form-control"
              onChange={handleChange}
              value={form.mensagem}
              id="mensagem"
              nome="mensagem"
              rows="5"
              placeholder="Deixe sua mensagem aqui!"
            />
          </div>
        </center>
        <br />
        <button type="submit"className="btn btn-outline-dark" >Enviar mensagem</button>
        {response && response.ok && <p>Formulario enviado</p>}
      </form>
      <hr/>
    </div>
  );
};

export default Envia_mensagem;
