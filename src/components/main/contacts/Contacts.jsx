import React, { Component } from 'react'
import './contacts.scss'

export default class Contacts extends Component {
  render() {
    return (
      <div className="py-4 contacts-block">
        <div className="contacts-block-inner">

          <h2 className="pt-3 pb-2 px-3 text-center">РЕШАЕМ ВАШИ ВОПРОСЫ, <br /> А НЕ СОЗДАЕМ НОВЫЕ!</h2>
          <p className="txt-info text-center pb-2">Напишите нам, и мы свяжемся с вами в ближайшие сроки!</p>
          <form className="form-group row p-0 m-0 px-lg-4 px-md-2 px-sm-0">
            <div className=" col-lg-4 col-md-4 col-sm-12">
              <input type="text"
                placeholder="Ваше имя"
                className="form-control mb-3 bg-light" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input type="text"
                placeholder="Ваш телефон"
                className="form-control mb-3 bg-light" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <button className="text-white mb-3 mx-auto px-4 d-block btn">
                ОТПРАВИТЬ ЗАЯВКУ
          </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
