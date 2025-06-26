import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Register.module.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 

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
  const [agreedToTerms, setAgreedToTerms] = useState(false); 

  function handlerChangeRegister(event){
    setRegister({...register, [event.target.name] : event.target.value});
    console.log(register);
  }

  async function submit(event) {
    event.preventDefault();

    if (!agreedToTerms) {
      setRegistrationStatus({ success: false, message: 'Você deve aceitar os Termos de Uso e a Política de Privacidade para se registrar.' });
      setPopupMessage('Você deve aceitar os Termos de Uso e a Política de Privacidade para se registrar.');
      setIsSuccessPopup(false);
      setShowPopup(true);
      return; 
    }

    const telefoneCompleto = register.ddd + register.phone;

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

        setRegister({
          nome: '',
          empresa: '',
          email: '',
          senha: '',
          ddd: '',
          phone: ''
        });
        setAgreedToTerms(false); 
        console.log("Pós sucesso:", register)
        setFormKey(Date.now())
      } else {
        setRegistrationStatus({ success: false, message: data.mensageStatus || 'Erro de conexão' , error: data.errorObject }); // Use data.mensageStatus aqui também para erros
        setPopupMessage(data.mensageStatus || 'Erro ao registrar!'); 
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
      setAgreedToTerms(false); 
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
          <form onSubmit={submit} key={formKey}>
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
                name="senha"
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
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            <label htmlFor="telefone">Número de Telefone</label>
            <div className={style["telefone-container"]}>
              <input type="number" id="ddd" name="ddd" placeholder="DDD"  required value={register.ddd} onChange={handlerChangeRegister} />
              <input type="number" id="phone" name="phone" placeholder="Digite seu telefone" required  onChange={handlerChangeRegister} value={register.phone} />
            </div>

            <div className={style["terms-checkbox-container"]}>
              <input
                type="checkbox"
                id="agreedToTerms"
                name="agreedToTerms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
              />
              <label htmlFor="agreedToTerms">
                Eu li e concordo com os{" "}
                <Link to="/terms-of-use" className={style["link-text"]}>Termos de Uso</Link>
                {" "}e a{" "}
                <Link to="/privacy-policy" className={style["link-text"]}>Política de Privacidade</Link>.
              </label>
            </div>

            <button type="submit">Registrar-se</button>


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