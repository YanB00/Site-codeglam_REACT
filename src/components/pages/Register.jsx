import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importação do Link
import style from "./Register.module.css";
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style["register-page"]}> {/* Novo contêiner */}
      <main className={style["register-container"]}>
        <div className={style["form-section"]}>
          <form>
            <h1>Registrar-se</h1>

            <label htmlFor="nome">Nome completo</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />

            <label htmlFor="empresa">Nome da empresa</label>
            <input type="text" id="empresa" name="empresa" placeholder="Digite o nome da sua empresa" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Seu@email.com" required />

            <label htmlFor="senha">Senha</label>
            <div className={style["password-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Senha (pelo menos 10 caracteres)"
                minLength="10"
                required
              />
              <span
                id="eyeicon"
                className={style["eye-icon"]}
                onClick={togglePasswordVisibility}
              >
                <i className={`fa fa-eye${showPassword ? "-slash" : ""}`} />
              </span>
            </div>

            <label htmlFor="options">Tamanho da empresa</label>
            <select id="options" name="options">
              <option value="micro">Microempresa</option>
              <option value="pequena">Pequeno Porte</option>
              <option value="media">Média Empresa</option>
              <option value="grande">Grande empresa</option>
            </select>

            <label htmlFor="telefone">Número de Telefone</label>
            <div className={style["telefone-container"]}>
              <input type="number" id="ddd" name="ddd" placeholder="DDD" required />
              <input type="number" id="phone" name="phone" placeholder="Digite seu telefone" required />
            </div>

            <button type="submit">Registrar-se</button>

            <p>
              Ao clicar em <strong>"Registrar-se"</strong>, você confirma que leu e concorda com os
              <a href="#" target="_blank"> Termos de Uso</a> e a <a href="#" target="_blank">Política de Privacidade</a>.
            </p>

            {/* Link para voltar ao login */}
            <Link to="/login" className={style["login-link"]}>
              Já tem uma conta? <span>Entre aqui</span>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;