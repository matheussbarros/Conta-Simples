import React, { Component } from 'react'
import './transactions.css'
import { Button3 } from '../../../utils/ThemeButtons'
import transaction from './Transaction'

export default class Transactions extends Component {

  constructor(props) {
    super(props);
    this.state = { transaction };
    { console.log(transaction) }
  }


  renderTransaction(transaction, index) {
    return (
      <div className="transaction row" key={index}>
        <div className="col-1 px-0 d-flex justify-content-center align-items-center">
          <span><i className={transaction.status ? "far fa-circle" : "fas fa-minus"}></i></span>
        </div>
        <div className="col-11 pl-0">
          <div className="transaction-card d-flex align-items-center">
            <div className="t-name d col-8 d-flex flex-column">
              <span>{transaction.title}</span>
              <small>{transaction.date}</small>
            </div>
            <div className="t-type col-2"> <span>{transaction.type}</span> </div>
            <div className="t-value col-2"><span>{transaction.value}</span></div>
          </div>
        </div>
      </div>
    )
  }



  render() {
    return (
      <div className="transactions pb-5">
        <h4>Transações</h4>
        <div className="pt-2">
          {this.state.transaction.map(this.renderTransaction)}
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center mt-3">
                <Button3 texto="Ver extrato completo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}