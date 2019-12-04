import React from 'react'
const logo = require('../../assets/images/logo-conta-simples.svg')
export default props => (

  <footer>
    <section className="container">
      <div className="row align-items-center pt-3 pb-3">
        <div className="col-4"> <img className="logo-footer" src={logo} alt="Conta Simples" /></div>
        <div className="col-8">
          <ul className="nav footer-menu justify-content-end">
            <li className="nav-item"><a className="nav-link" href="#">Politica de Privacidade</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Saiba mais sobre segurança</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Trabalhe Conosco</a></li>
          </ul>
        </div>
      </div>
    </section>

  </footer>


)