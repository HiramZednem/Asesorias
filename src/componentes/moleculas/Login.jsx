import React from 'react';
import '../../assets/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>BIENVENIDO</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Correo" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Contraseña" required />
          </div>
          <Link to="/Eliminar">
            <button type="submit">Login</button>
          </Link>
        </form>
        <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
      </div>
    </div>
  );
}

export default Login;
