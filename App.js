import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [message,setMessage]= useState("");

  function sendEmail(e){
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("preencha todos os campos");
      return;      
    }
    alert("Muito Obrigado")    
  }

  const templatesParams = {
    from_name: name,
    message: message,
    email: email
  }

  emailjs.send("service_ouax3qu","template_7j1cz9w",templatesParams,"FuoC4ijUk_Yu4b95v")

  return (
    <main className="pagina">
      <div className='container'>
        <h3 className="titulo">Contatos</h3>

        <form className="formulario" onSubmit={sendEmail}>
          <input
          className="input"
          placeholder="Digite seu nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}          
          />

          <input
          className="input"
          placeholder="Digite seu email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}          
          />

          <textarea
          className="textarea"
          placeholder="Digite sua mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          />

          <input className='enviar' type='submit' value="Enviar!"/>
        </form>
        </div>
    </main>
  );
}

export default App;
