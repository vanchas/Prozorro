import React, { Component } from 'react'
import './contacts.scss'

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      name: ''
    };
    this.phoneInput = this.phoneInput.bind(this);
    this.nameInput = this.nameInput.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  phoneInput(phone) {
    this.setState({ phone })
  }
  nameInput(name) {
    this.setState({ name: name.trim() })
  }

  sendData(e) {
    e.preventDefault();
    if (
      this.state.phone.toString().length &&
      this.state.name.length
    ) {
      fetch('/3.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          phone: this.state.phone,
          name: this.state.name
        })
      }).then((res) => console.log(res.json()));
    } else {
      alert('Все поля должны быть корректно заполнены');
    }
  }

  render() {
    return (
      <div className="py-4 contacts-block">
        <div className="contacts-block-inner">

          <h2 className="pt-3 pb-2 px-3 text-center">РЕШАЕМ ВАШИ ВОПРОСЫ, <br /> А НЕ СОЗДАЕМ НОВЫЕ!</h2>
          <p className="txt-info text-center pb-2">Напишите нам, и мы свяжемся с вами в ближайшие сроки!</p>
          <form className="form-group row pt-5 mx-0 mb-2 px-lg-5 px-md-2 px-sm-0">
            <div className=" col-lg-4 col-md-4 col-sm-12">
              <input type="text"
                onChange={e => this.nameInput(e.target.value)}
                placeholder="Ваше имя"
                className="form-control mb-3 name-input" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <input type="number"
                onChange={e => this.phoneInput(e.target.value)}
                placeholder="Ваш телефон"
                className="form-control mb-3 phone-input" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <button
                onClick={e => this.sendData(e)}
                className="text-white mb-3 px-5 py-2 d-block btn send-btn">
                ОТПРАВИТЬ ЗАЯВКУ
          </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
