import React from 'react';
import '../../assets/SearchStudents.css';

function SearchStudents() {
  return (
    <div className="search-students">
      <h2>Agregar Alumnos No Registrado</h2>
      <h5>Buscar y agrega alumnos no registrados</h5>
      <h3>Buscar alumno</h3>
      <input type="text" placeholder="Ingresa el nombre del alumno" />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Escobar Guillen</td>
            <td>221192</td>
            <td><button>Agregar</button></td>
          </tr>
          <tr>
            <td>Escobar Guillen</td>
            <td>221192</td>
            <td><button>Agregar</button></td>
          </tr>
          <tr>
            <td>Escobar Guillen</td>
            <td>221192</td>
            <td><button>Agregar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SearchStudents;
