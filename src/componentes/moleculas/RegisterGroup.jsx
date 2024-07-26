import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../../assets/RegisterGroup.css';

function RegisterGroup() {
  const [grupo, setGroupName] = useState('');
  const [descripcion, setDescription] = useState('');
  const [horario, setPreferredTime] = useState('');
  const [materia, setInterestSubject] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!grupo || !descripcion || !horario || !materia) {
      Swal.fire('Error', 'Por favor completa todos los campos', 'error');
      return;
    }

    const data = {
      grupo: grupo,
      descripcion: descripcion,
      horario: horario,
      materia: materia,
    };

    try {
      const response = await fetch('http://52.72.102.198:3000/api/grupos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire('Éxito', 'Grupo registrado exitosamente', 'success');
        setGroupName('');
        setDescription('');
        setPreferredTime('');
        setInterestSubject('');
      } else {
        Swal.fire('Error', 'Error al registrar el grupo', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Error al conectar con el servidor', 'error');
    }
  };

  return (
    <div className="register-group">
      <h3>Registro de Grupo</h3>
      <p>Registra un nuevo grupo de asesoría</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="group-name">Nombre del grupo</label>
        <input
          type="text"
          id="group-name"
          placeholder="Ingresa el nombre del grupo"
          value={grupo}
          onChange={(event) => setGroupName(event.target.value)}
          required
        />
        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          id="description"
          placeholder="Ingresa la descripción"
          value={descripcion}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <label htmlFor="preferred-time">Horario Preferido</label>
        <input
          type="text"
          id="preferred-time"
          placeholder="Ingresa horario"
          value={horario}
          onChange={(event) => setPreferredTime(event.target.value)}
          required
        />
        <label htmlFor="interest-subject">Materia de Interés</label>
        <input
          type="text"
          id="interest-subject"
          placeholder="Ingresa la materia de interés"
          value={materia}
          onChange={(event) => setInterestSubject(event.target.value)}
          required
        />
        <button type="submit">Registrar grupo</button>
      </form>
    </div>
  );
}

export default RegisterGroup;