import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/navbar.css';
import icon from './assests/icon.png'; 

const NavBar = () => (
  <div className="container-fluid px-xl-5 px-lg-5 px-sm-2 px-md-2">
  <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div className="container-fluid">
      <div className="navbar-brand">
        <img src={icon} alt="Icon" className="navbar-icon" />
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/buy">Buy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/legend">Legend</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/project">Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tech">Tech</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/war-room">War Room</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skullonomics">Skullonomics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/moonmap">Moonmap</Link>
          </li>
        </ul>
      </div>
      <div className="d-lg-flex d-xl-flex d-sm-none d-md-none ">
        <button className="btn btn-danger connect-button">Connect</button>
      </div>
    </div>
  </nav>
  </div>
);

export default NavBar;
