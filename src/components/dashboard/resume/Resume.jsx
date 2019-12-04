import React from 'react'
import './resume.css'

export default props => (

 
  <div className="resume pb-4">
    <h4>Resumo de Novembro</h4>
    <small>Atualizado em 26/11/2019 ás 19:27</small>
    <div className="row mt-3 mb-4">
      <div className="col-4">
        <div className="card">
          <div className="title-card">Saldo Total</div>
          <div className="value-money-1 d-flex">
            <span>R$ 7.359,21</span>
            <div className="yield align-self-center">
              <i className="fas fa-caret-up"></i>
              <span>15%</span>
            </div>
          </div>
          <small>15% acima do mesmo periodo do mês anterior</small>
        </div>
      </div>
      <div className="col-8">
        <div className="card">
          <div className="d-flex justify-content-around">
            <div className="mr-3">
              <div className="title-card">Rentabilidade CDI</div>
              <span className="month">Este Mes</span>
              <div className="value-money-2 d-flex">
                <span>+ R$ 7.359,21</span>
                <div className="yield align-self-center">
                  <i className="fas fa-caret-up"></i>
                  <span>R$ 0,50</span>
                </div>
              </div>
              <small>Otem seu rendimento foi de R$ 0,50</small>
            </div>
            <div>
              <div className="title-card">Ultimas entradas</div>
              <span className="month">Este Mes</span>
              <div className="value-money-2 d-flex">
                <span>+ R$ 7.359,21</span>
                <div className="yield align-self-center">
                  <i className="fas fa-caret-up"></i>
                  <span>33%</span>
                </div>
              </div>
              <small>33% acima do mesmo periodo do mês anterior</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


)