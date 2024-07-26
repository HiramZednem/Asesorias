import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>REGISTRATE</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Correo" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Contraseña" required />
          </div>
          <button type="submit">Registrar</button>
        </form>
        <p>¿Ya tienes cuenta? 
        
          <a href="/">Iniciar Sesión</a></p>
          </div>
    </div>
  );
}

export default Register;
