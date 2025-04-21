import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Register.module.css";
import 'font-awesome/css/font-awesome.min.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState({
    nome: '',
    empresa: '',
    email: '',
    senha: '',
    ddd: '',
    phone: ''
  });
  const [registrationStatus, setRegistrationStatus] = useState(null); // Para feedback ao usuário
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccessPopup, setIsSuccessPopup] = useState(false);
  const [formKey, setFormKey] = useState(Date.now());

  function handlerChangeRegister(event){
    setRegister({...register, [event.target.name] : event.target.value});
    console.log(register);
  }

  async function submit(event) {
    event.preventDefault();
    
    const telefoneCompleto = register.ddd+register.phone;

    const dataToSend ={
      nome: register.nome,
      empresa: register.empresa,
      email: register.email,
      senha: register.senha,
      telefone: telefoneCompleto
    };
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        },
        body: JSON.stringify(dataToSend)
      });

      const data = await response.json();
      console.log("pós response:", register)
      if (response.ok) {
        setRegistrationStatus({ success: true, message: data.mensageStatus });
        setPopupMessage(data.mensageStatus);
        setIsSuccessPopup(true);
        setShowPopup(true);


         // Limpar os campos do formulário
         setRegister({
          nome: '',
          empresa: '',
          email: '',
          senha: '',
          ddd: '',
          phone: ''
        });
        console.log("Pós sucesso:", register)
        setFormKey(Date.now())
      } else {
        setRegistrationStatus({ success: false, message: 'Erro de conexão', error: data.errorObject });
        setPopupMessage('Erro ao registrar!');
        setIsSuccessPopup(false);
        setShowPopup(true);
      }
    } catch (error) {
      setRegistrationStatus({ success: false, message: 'Erro de conexão com o servidor.', error: error });
      setPopupMessage('Erro de conexão com o servidor')
      setIsSuccessPopup(false);
      setShowPopup(true);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closePopup = () =>{
    setShowPopup(false);
    if (registrationStatus?.success) {
      setRegister({
        nome: '',
        empresa: '',
        email: '',
        senha: '',
        ddd: '',
        phone: ''
      });
    }
      setRegistrationStatus(null);
    }
  
  useEffect(()=>{
    console.log("Estado Registro:", register);
    }, [register]);

  return (
    <div className={style["register-page"]}>
      <main className={style["register-container"]}>
        <div className={style["form-section"]}>
          <form onSubmit={submit} key={formKey}> {/* Adicione onSubmit ao formulário */}
            <h1>Registrar-se</h1>

            <label htmlFor="nome">Nome completo</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required onChange={handlerChangeRegister} value={register.nome} />

            <label htmlFor="empresa">Nome da empresa</label>
            <input type="text" id="empresa" name="empresa" placeholder="Digite o nome da sua empresa" onChange={handlerChangeRegister} value={register.empresa} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Seu@email.com" required onChange={handlerChangeRegister} value={register.email} />

            <label htmlFor="senha">Senha</label>
            <div className={style["password-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="senha" // Corrigido para 'senha' para corresponder ao backend
                placeholder="Senha (pelo menos 10 caracteres)"
                minLength="10"
                required
                onChange={handlerChangeRegister}
                value={register.senha}
              />
              <span
                id="eyeicon"
                className={style["eye-icon"]}
                onClick={togglePasswordVisibility}
              >
                <i className={`fa fa-eye${showPassword ? "-slash" : ""}`} />
              </span>
            </div>

            <label htmlFor="telefone">Número de Telefone</label>
            <div className={style["telefone-container"]}>
              <input type="number" id="ddd" name="ddd" placeholder="DDD"  required value={register.ddd} onChange={handlerChangeRegister} />
              <input type="number" id="phone" name="phone" placeholder="Digite seu telefone" required  onChange={handlerChangeRegister} value={register.phone} />
            </div>

            <button type="submit">Registrar-se</button>

        
      

            <p>
              Ao clicar em <strong>"Registrar-se"</strong>, você confirma que leu e concorda com os
              <a href="#" target="_blank"> Termos de Uso</a> e a <a href="#" target="_blank">Política de Privacidade</a>.
            </p>

            <Link to="/login" className={style["login-link"]}>
              Já tem uma conta? <span>Entre aqui</span>
            </Link>
          </form>
        </div>
      </main>

 {/* Simple Pop-up */}
 {showPopup && (
        <div className={style["popup-overlay"]}>
          <div className={`${style["popup-content"]} ${isSuccessPopup ? style["popup-success"] : style["popup-error"]}`}>
            <p>{popupMessage}</p>
            <button onClick={closePopup}>OK</button>
            {!isSuccessPopup && registrationStatus?.error && (
              <pre>{JSON.stringify(registrationStatus.error, null, 2)}</pre>
            )}
          </div>
      </div>
 )}
 </div>
  );
};

export default Register;