import React from 'react';
import '../../assets/RegisterGroup.css';

function RegisterGroup() {
  return (
    <div className="register-group">
      <h3>Registro de Grupo</h3>
      <p>Registra un nuevo grupo de asesoría</p>
      <form>
        <label htmlFor="group-name">Nombre del grupo</label>
        <input type="text" id="group-name" placeholder="Ingresa el nombre del grupo" />
        <label htmlFor="description">Descripción</label>
        <input type="text" id="description" placeholder="Ingresa la descripción" />
        <label htmlFor="preferred-time">Horario Preferido</label>
        <input type="text" id="preferred-time" placeholder="Ingresa horario" />
        <label htmlFor="interest-subject">Materia de Interés</label>
        <input type="text" id="interest-subject" placeholder="Ingresa la materia de interés" />
        <button>Registrar grupo</button>
      </form>
    </div>
  );
}

export default RegisterGroup;
