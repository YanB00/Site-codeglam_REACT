// src/components/pages/ResetPassword.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import style from './ForgotPassword.module.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 

const ResetPassword = () => {
    const { userId, token } = useParams();
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

    useEffect(() => {
        if (!userId || !token) {
            setMessage('Link de redefinição inválido ou incompleto.');
            setError(true);
        } else {
            setMessage('');
            setError(false);
        }
    }, [userId, token]);

    const togglePasswordVisibility = () => { 
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => { 
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError(false);

        if (!userId || !token) {
            setError(true);
            setMessage('Erro: Link de redefinição incompleto. Por favor, solicite um novo.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError(true);
            setMessage('As senhas não coincidem.');
            return;
        }

        if (newPassword.length < 10) {
            setError(true);
            setMessage('A senha deve ter pelo menos 10 caracteres.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/reset-password/${userId}/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.mensageStatus || 'Senha redefinida com sucesso! Você será redirecionado para o login.');
                setError(false);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                setError(true);
                setMessage(data.mensageStatus || 'Ocorreu um erro ao redefinir sua senha. O link pode ser inválido ou ter expirado.');
                console.error('Erro na resposta do backend:', data);
            }
        } catch (fetchError) {
            setError(true);
            setMessage('Não foi possível conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.');
            console.error('Erro ao enviar requisição de redefinição:', fetchError);
        }
    };

    if (!userId || !token) {
        return (
            <div className={style['forgot-page']}>
                <main className={style['forgot-container']}>
                    <h1 className={style['error-title']}>Erro!</h1>
                    <p className={style['error-msg']}>{message}</p>
                    <Link to="/forgot-password" className={style['back-link']}>Solicitar um novo link</Link>
                </main>
            </div>
        );
    }

    return (
        <div className={style['forgot-page']}>
            <main className={style['forgot-container']}>
                <div className={style['form-section']}>
                    <form onSubmit={handleSubmit}>
                        <h1>Redefinir Senha</h1>

                        {message && (
                            <p className={`${error ? style['error-msg'] : style['success-msg']}`}>
                                {message}
                            </p>
                        )}

                        <div className={style['password-container']}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Nova Senha (pelo menos 10 caracteres)"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                minLength="10"
                                required
                            />
                            <span
                                id="eyeicon-new-password" // ID único
                                className={style['eye-icon']}
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        <div className={style['password-container']}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirme a Nova Senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                minLength="10"
                                required
                            />
                            <span
                                id="eyeicon-confirm-password" 
                                className={style['eye-icon']}
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        <button type="submit">Redefinir Senha</button>

                        <Link to="/login" className={style['back-link']}>
                            Voltar para o login
                        </Link>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ResetPassword;