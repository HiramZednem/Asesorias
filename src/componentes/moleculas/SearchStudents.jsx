import React, { useState, useEffect } from 'react';
import '../../assets/SearchStudents.css';

function SearchStudents() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch students data from the API
    fetch('http://52.72.102.198:3000/api/alumnos')
      .then(response => response.json())
      .then(data => {
        // Set only the name and matricula from the fetched data
        const filteredData = data.map(student => ({
          name: student.nombre || '',
          matricula: student.matricula || '',
        }));
        setStudents(filteredData);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  // Filter students based on search term
  const filteredStudents = students.filter(student => {
    const name = student.name.toLowerCase();
    const matricula = student.matricula;
    const term = searchTerm.toLowerCase();
    return name.includes(term) || matricula.includes(term);
  });

  return (
    <div className="search-students">
      <h2>Agregar Alumnos No Registrado</h2>
      <h5>Buscar y agrega alumnos no registrados</h5>
      <h3>Buscar alumno</h3>
      <input
        type="text"
        placeholder="Ingresa el nombre o la matrícula del alumno"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.matricula}</td>
              <td><button>Agregar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchStudents;