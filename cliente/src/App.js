import './App.css';
import React, { useState } from "react"
import Axios from 'axios'
function App() {

  const [nome, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCit] = useState("");
  const [universidade, setUni] = useState("");
  const [estado, setEst] = useState("");

  const [errosNome, setNomeE] = useState("");
  const [errosEmail, setEmailE] = useState("");
  const [errosCidade, setCidadeE] = useState("");
  const [errosUni2, setUniE] = useState("");


  async function validateInfo() {
    setNomeE("");
    setEmailE("");
    setCidadeE("");
    setUniE("");
    
    let error = false;

    if (nome === "") {
      error = true;
      setNomeE("É necessário um nome!")
    }
    if (email === "") {
      error = true;
      setEmailE("É necessário um E-mail!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error = true;
      setEmailE("O endereço de E-mail é inválido!");
    } else if (email === 'auth/email-already-in-use') {
      error = true;
      setEmailE("O E-mail já é existente!");
    }

    if (cidade === "") {
      error = true;
      setCidadeE("É necessário inserir uma cidade!");
    }
    if (universidade === "") {
      error = true;
      setUniE("É necessário inserir uma universidade!");
    }
    if (error === false) {
      Axios.post('http://localhost:3001/create', 
      {nome: nome, email: email, cidade: cidade, universidade: universidade, estado: estado})
      .then(()=>{
        console.log("success");
      })
    }
  }

  return (
    <div className='form-container'>
      <div className='form-content-left'></div>

      <div className='form-content-right'>
        <form className='form'>
          <h1>
            Cadastro
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Nome</label>
            <input
              className='form-input'
              type='text'
              placeholder='Digite seu nome'
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <p>{errosNome}</p>

          </div>
          <div className='form-inputs'>
            <label className='form-label'>E-mail</label>
            <input
              className='form-input'
              type='email'
              placeholder='Entre com seu E-mail'
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{errosEmail}</p>

          </div>
          <div className='form-inputs'>
            <label className='form-label'>Cidade</label>
            <input
              className='form-input'
              type='text'
              placeholder='Entre com sua cidade'
              onChange={(e) => setCit(e.target.value)}
            />
            <p>{errosCidade}</p>
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Universidade</label>
            <input
              className='form-input'
              type='text'
              placeholder='Digite sua universidade'
              onChange={(e) => setUni(e.target.value)}
            />
            <p>{errosUni2}</p>
          </div>

          <div className='form-inputs'>
            <label className='form-label'>Estado</label>
            <input
              className='form-input'
              type='text'
              placeholder='Digite seu estado'
              onChange={(e) => setEst(e.target.value)}
            />
          </div>

          <button type="button" className='form-input-btn' onClick={validateInfo}>
            Cadastrar
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;