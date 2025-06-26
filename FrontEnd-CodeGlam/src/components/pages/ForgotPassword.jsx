import React, { useState } from "react";
import { Link } from 'react-router-dom';
import style from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [message, setMessage] = useState(''); 
  const [error, setError] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); 
    setError(false); 

    try {
      const response = await fetch('http://localhost:3000/forgot-password', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSent(true); 
        setMessage(data.mensageStatus || 'Se o e-mail estiver cadastrado, você receberá um link de redefinição.');
      } else {
        setError(true);
        setMessage(data.mensageStatus || 'Ocorreu um erro ao processar sua solicitação. Tente novamente.');
        console.error('Erro na resposta do backend:', data);
      }
    } catch (fetchError) {
      setError(true);
      setMessage('Não foi possível conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.');
      console.error('Erro ao enviar requisição:', fetchError);
    }
  };

  return (
    <div className={style['forgot-page']}>
      <main className={style['forgot-container']}>
        <div className={style['form-section']}>
          <form onSubmit={handleSubmit}>
            <h1>Recuperar Senha</h1>

            {emailSent ? (
              <p className={style['success-msg']}>
                {message}
              </p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Enviar link de recuperação</button>
              </>
            )}

            {message && !emailSent && (
                <p className={`${error ? style['error-msg'] : style['info-msg']}`}>
                    {message}
                </p>
            )}

            <Link to="/login" className={style['back-link']}>
              Voltar para o login
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;