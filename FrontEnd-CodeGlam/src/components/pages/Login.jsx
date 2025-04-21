import React, { useState } from "react";
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // sucesso
        console.log("Login bem-sucedido:", data);
        localStorage.setItem('user', JSON.stringify(data.data));
        navigate('/');
      } else {
        // falha
        console.error("Erro no login:", data);
        setErrorMessage(data.mensageStatus || "Erro ao realizar login");
      }
    } catch (error) {
      console.error("Erro de rede ou ao processar a resposta:", error);
      setErrorMessage("Houve um erro ao tentar fazer login. Por favor, tente novamente!");
    }
  };

  return (
    <div className={style['login-page']}> {/* Novo contêiner */}
      <main className={style['login-container']}>
        <div className={style['form-section']}>
          <form>
            <h1>Login</h1>
            <input type="email" placeholder="Email" required /> {/* Changed type to "email" */}

            <div className={style['password-container']}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Senha (pelo menos 10 caracteres)"
                minLength="10"
                required
              />
              <span
                id="eyeicon"
                className={style['eye-icon']}
                onClick={togglePasswordVisibility}
              >
                <i className={`fa fa-eye${showPassword ? '-slash' : ''}`} />
              </span>
            </div>

            <a href="#">Esqueceu sua senha?</a>
            <button type="submit">Entrar</button>
            <Link to="/register" className={style['register-link']}> {/* Added a class for styling */}
              Novo aqui? <span>Crie sua conta</span>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;