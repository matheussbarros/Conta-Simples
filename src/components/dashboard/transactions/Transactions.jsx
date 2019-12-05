import React from 'react'
import './transactions.css'
import { Button3 } from '../../../utils/ThemeButtons'

export default props => (

  <div className="transactions pb-5">
    <h4>Transações</h4>
    <div className="transaction row">
      <div className="col-1 px-0 d-flex justify-content-center align-items-center">
        <span><i className="far fa-circle"></i></span>
      </div>
      <div className="col-11 pl-0">
        <div className="transaction-card d-flex align-items-center">
          <div className="t-name d col-8 d-flex flex-column">
            <span>Starbucks Coffee Company</span>
            <small>10 de Novembro de 2019</small>
          </div>
          <div className="t-type col-2"> <span>vendas</span> </div>
          <div className="t-value col-2"><span>R$ 19,90</span></div>
        </div>
      </div>
    </div>

    <div className="transaction row">
      <div className="col-1 px-0 d-flex justify-content-center align-items-center">
        <span><i className="fas fa-minus"></i></span>
      </div>
      <div className="col-11 pl-0">
        <div className="transaction-card d-flex align-items-center">
          <div className="t-name d col-8 d-flex flex-column">
            <span>Google Ads tecnologia e propaganda SA.</span>
            <small>10 de Novembro de 2019</small>
          </div>
          <div className="t-type col-2"> <span>marketing</span> </div>
          <div className="t-value col-2"><span>R$ 799,90</span></div>
        </div>
      </div>
    </div>

    <div className="transaction row">
      <div className="col-1 px-0 d-flex justify-content-center align-items-center">
        <span><i className="fas fa-minus"></i></span>
      </div>
      <div className="col-11 pl-0">
        <div className="transaction-card d-flex align-items-center">
          <div className="t-name d col-8 d-flex flex-column">
            <span>Facebook Business tecnologia e marketing LTDA.</span>
            <small>10 de Novembro de 2019</small>
          </div>
          <div className="t-type col-2"> <span>marketing</span> </div>
          <div className="t-value col-2"><span>R$ 7.830,90</span></div>
        </div>
      </div>
    </div>

    <div className="transaction row">
      <div className="col-1 px-0 d-flex justify-content-center align-items-center">
        <span><i className="far fa-circle"></i></span>
      </div>
      <div className="col-11 pl-0">
        <div className="transaction-card d-flex align-items-center">
          <div className="t-name d col-8 d-flex flex-column">
            <span>Loggi logistica</span>
            <small>10 de Novembro de 2019</small>
          </div>
          <div className="t-type col-2"> <span>financeiro</span> </div>
          <div className="t-value col-2"><span>R$ 7,13</span></div>
        </div>
      </div>
    </div>

    <div className="transaction row">
      <div className="col-1 px-0 d-flex justify-content-center align-items-center ">
        <span><i className="fas fa-minus"></i></span>
      </div>
      <div className="col-11 pl-0">
        <div className="transaction-card d-flex align-items-center">
          <div className="t-name d col-8 d-flex flex-column">
            <span>AWS - Amazon web service tecnologia</span>
            <small>10 de Novembro de 2019</small>
          </div>
          <div className="t-type col-2"> <span>tecnologia</span> </div>
          <div className="t-value col-2"><span>R$ 2009,55</span></div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-center mt-3">
        <Button3 texto="Ver extrato completo" />  
        </div>
      </div>
    </div>

  </div>

)