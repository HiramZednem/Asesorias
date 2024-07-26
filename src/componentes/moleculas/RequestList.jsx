import React from 'react';
import '../../assets/RequestList.css';

function RequestList() {
  return (
    <div className="request-list">
      <h3>Solicitud de asesoría</h3>
      <h5>Lista de solicitud de asesoria recibidas</h5>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Alumno</th>
            <th className="MoverAcciones1">Materia</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th className="MoverAcciones">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-05-01</td>
            <td>12:00 am</td>
            <td>Juan Pérez</td>
            <td>Programación para móviles</td>
            <td>Individual</td>
            <td>Pendiente</td>
            <td className="action-buttons"><button>Aceptado</button><button>Rechazado</button></td>
          </tr>
          <tr className="highlight">
            <td>2023-05-01</td>
            <td>10:00 am</td>
            <td>Juan Pérez</td>
            <td>Programación para móviles</td>
            <td>Individual</td>
            <td>Pendiente</td>
            <td className="action-buttons"><button>Aceptado</button><button>Rechazado</button></td>
          </tr>
          <tr className="highlight">
            <td>2023-05-01</td>
            <td>10:00 am</td>
            <td>Juan Pérez</td>
            <td>Programación para móviles</td>
            <td>Individual</td>
            <td>Pendiente</td>
            <td className="action-buttons"><button>Aceptado</button><button>Rechazado</button></td>
          </tr>
          <tr>
            <td>2023-05-01</td>
            <td>8:00 am</td>
            <td>Juan Pérez</td>
            <td>Programación para móviles</td>
            <td>Individual</td>
            <td>Pendiente</td>
            <td className="action-buttons"><button>Aceptado</button><button>Rechazado</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RequestList;
