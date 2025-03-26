import React, { useState } from "react";
import style from './Login.module.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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