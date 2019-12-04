import React from 'react'
import './banner.css'


const banner = require('../../../assets/images/banner.png')

export default props => (

  <div className="banner mt-5 pb-4">
    <div className="row">
      <div className="col-12">
        <div className="bg">
          <div className="float-img">
            <img className="img-banner" src={banner} />
          </div>
          <div className="col-9">
            <h3>Múltiplos cartões virtuais gratuitos e ilimitados</h3>
            <p>Evite pausas de campanhas de marketing por conta de bloqueio do cartão de crédito. Tenha
            múltiplos cartões virtuais para cada conta ou plataforma.</p>
            <button className="btn btn-2">Ativar cartão virtual</button>
          </div>
        </div>
      </div>
    </div>
  </div>


)