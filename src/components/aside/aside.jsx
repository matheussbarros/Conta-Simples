import React from 'react'
import './asideMenu.css'
import { Button1 } from '../../utils/ThemeButtons'

export default prop => (

  <aside className="aside-area">
    <div className="btn-area mb-4">
      <Button1 texto="depositar" />
    </div>
    <div>

      <h6>acesso rápido</h6>
      <ul className="aside-menu nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i className="fas fa-fw fa-home"></i>
            <span>Consultar saldo</span></a> </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="far fa-fw fa-file-alt"></i>
            <span>Extrato da conta</span> </a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="far fa-fw fa-credit-card"></i>
            <span>Cartões</span><span className="new">novo</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-dollar-sign"></i>
            <span>Emitir cobrança</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="far fa-fw fa-chart-bar"></i>
            <span>Gestão de cobrança</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-exchange-alt"></i>
            <span>Transferência</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-barcode"></i>
            <span>Pagamentos</span></a></li>
      </ul>
    </div>
    <div>

      <h6>mais</h6>
      <ul className=" aside-menu nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="far fa-fw fa-calendar"></i>
            <span>Agendamento</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-file-invoice-dollar"></i>
            <span>Comprovantes</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-percent"></i>
            <span>Tarifas</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-phone-square-alt"></i>
            <span>Fale conosco</span></a></li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-tags"></i>
            <span>Benefícios</span></a></li>
      </ul>
    </div>
  </aside>


)