import React from 'react';
import '../../assets/Sidebar.css';
import Logo from '../../assets/Logo.png';
import MoreInfo from '../../assets/MoreSquare.png';
import UserIcon from '../../assets/PictureUser.png'; // Icono de usuario
import IcoDashboard from '../../assets/images/Home2.png';
import IcoDashboard2 from '../../assets/images/Home2.png';
import IcoMisGrupos from '../../assets/images/Graph.png';
import IcoHorarios from '../../assets/images/Calendar.png';
import IcoAsesorias from '../../assets/images/page.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-header">
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="title">Software</h1>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-item">
            <img src={IcoDashboard} alt="Dashboard" className="icon" />
            <span>Dashboard</span>
          </div>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-item">
            <img src={IcoDashboard2} alt="Permisos" className="icon" />
            <span>Permisos</span>
          </div>
          <div className="sidebar-item">
            <img src={IcoMisGrupos} alt="Mis Grupos" className="icon" />
            <span>Mis Grupos</span>
          </div>
          <div className="sidebar-item">
            <img src={IcoHorarios} alt="Horarios" className="icon" />
            <span>Horarios</span>
          </div>
          <div className="sidebar-item asesorias">
            <img src={IcoAsesorias} alt="Asesorias" className="icon" />
            <span>Asesorias</span>
            <span className="badge">10</span>
          </div>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="user-info">
          <img src={UserIcon} alt="User" className="user-icon" />
          <div className="user-details">
            <span className="user-name">Alí Lopez</span>
            <p className="user-email">Ali@ids.upchiapas.edu.mx</p>
          </div>
          <img src={MoreInfo} alt="More Info" className="more-info-icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
