import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valores de teste
    const validUsername = "jordao";
    const validPassword = "jordao123";

    if (username === validUsername && password === validPassword) {
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="login-container">
      <span className="logo-title">Quem vai ganhar?</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="login-username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Senha:</label>
          <input
            type="password"
            id="login-password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="button" className="forgot-password">
            Esqueci minha senha
          </button>
          <button type="submit" className="login-btn">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
