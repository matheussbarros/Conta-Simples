import React from 'react';
import './header.css'


const logo = require('../../assets/images/logo-conta-simples.svg')
const avatar = require('../../assets/images/user.png')
export default props => (
  <header>
    <nav className="navbar  pt-0 pb-0">
      <div className="d-flex">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="Conta Simples"/> </a>
        <ul className="nav menu">
          <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link"
            href="#">Cobrar</a></li>
          <li className="nav-item"><a className="nav-link"
            href="#">Gestão</a></li>
          <li className="nav-item"><a className="nav-link"
            href="#">Pagar</a></li>
          <li className="nav-item"><a className="nav-link"
            href="#">Cartões</a></li>
        </ul>
      </div>
      <div className="user-area d-flex">
        <div className="notification">
          <span className="number">3</span>
          <i className="far fa-bell"></i>
        </div>
        <div className="user-info d-flex">
          <div className="photo">
            <img src={avatar} />
          </div>
          <div className="user-data d-flex flex-column align-self-center">
            <span>Matheus Barros</span>
            <span>Conta <b>0001</b> Agencia 43322-1</span>
          </div>
          <div className="arrow">
            <a href="#"> <i className="fas fa-sort-down"></i> </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)