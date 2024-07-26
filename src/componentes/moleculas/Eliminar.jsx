import React from 'react';
import '../../assets/Eliminar.css';
import Perfil from '../../assets/perfil.png'

const users = [
  { id: 1, name: 'Samuel Escobar', avatar: Perfil },
  { id: 2, name: 'Alan Zabaleta', avatar: Perfil },
];

const DeleteUsers = () => {
  const handleDelete = (id) => {
    // Lógica para eliminar el usuario
    console.log(`Eliminar usuario con ID: ${id}`);
  };

  return (
    <div className="delete-users-container">
      <div className="delete-users-box">
        <h2>ELIMINAR USUARIOS</h2>
        {users.map((user) => (
          <div className="user-item" key={user.id}>
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <span>{user.name}</span>
            <button onClick={() => handleDelete(user.id)}>ELIMINAR</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteUsers;
