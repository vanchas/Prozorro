import React, { Component } from 'react'
import './about.scss'
import BigRob from './image/big-rob.png'
import DocSign from './image/doc-sign.png'
import MolotSign from './image/molot-sign.png'
import ScalesSign from './image/scales-sign.png'

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      email: '',
      link: ''
    };
    this.phoneInput = this.phoneInput.bind(this);
    this.linkInput = this.linkInput.bind(this);
    this.emailInput = this.emailInput.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  phoneInput(phone) {
    this.setState({ phone })
  }
  emailInput(email) {
    this.setState({ email: email.trim() })
  }
  linkInput(link) {
    this.setState({ link: link.trim() })
  }

  sendData(e) {
    e.preventDefault();
    if (
      this.state.phone.toString().length &&
      this.state.email.length &&
      this.state.link.length
    ) {
      fetch('/php1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          phone: this.state.phone,
          email: this.state.email,
          link: this.state.link
        })
      }).then((res) => console.log(res.json()));
    } else {
      alert('Все поля должны быть корректно заполнены');
    }
  }

  render() {
    return (
      <div className="position-relative">

        <div className="robot-holder">
          <img className="" src={BigRob} alt="bot" />
        </div>

        <header className="w-100 row m-0 p-0 about-header mx-auto">
          <div className="header-description row col-lg-8 col-md-12 mt-1 pl-0 pr-lg-3 pr-md-0 mx-md-auto">
            <div className="col-lg-2 col-md-0"></div>
            <div className="info-header-block col-lg-10 col-md-12 pr-lg-1 pr-md-0 pl-0">
              <div className="bkg-info text-white text-center about-header-description-top">
                <h1 className="m-0 h2 font-weight-bold">Я ТЕНДЕРБОТ</h1>
                <p className="h6 pl-lg-5 pl-md-0 pb-2">УНИКАЛЬНАЯ КОМПЬЮТЕРНАЯ ПРОГРАММА</p>
              </div>
              <div className="about-header-description-top-inner font-weight-bolder pb-2">
                <div className="row w-100">
                  <div className="col-lg-3 col-md-0 p-0"></div>
                  <div className="col-lg-9 col-md-12 pl-md-2 pl-sm-0 pl pr-0 d-flex">
                    <img height={35} src={MolotSign} alt="." />
                    <p className="pl-2 m-0 header-text-item">ОБРАБОТАЮ ТЕНДЕРНУЮ ДОКУМЕНТАЦИЮ</p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-lg-3 col-md-0 p-0"></div>
                  <div className="col-lg-9 col-md-12 pl-md-2 pl-sm-0 d-flex pl-2">
                    <img className="mt-2" height={28} src={DocSign} alt="." />
                    <p className="pl3 mb-2 header-text-item">СОСТАВЛЮ СПИСОК НЕОБХОДИМЫХ ДОКУМЕНТОВ</p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-lg-3 col-md-0 p-0"></div>
                  <div className="col-lg-9 col-md-12 pl-md-2 pl-sm-0 d-flex pl-2">
                    <img height={30} src={ScalesSign} alt="." className="mt-1" />
                    <p className="pl-3 m-0 header-text-item">ОТПРАВЛЮ ЕГО ВАМ ПОСЛЕ ПРОВЕРКИ ОПЫТНЫМ ЮРИСТОМ.</p>
                  </div>
                </div>
              </div>
              <div className="bkg-info text-white text-center">
                <p className="h2 pt-3 pb-3 pl-lg-5 ml-lg-4 pl-md-0 ml-md-0 font-weight-bold">Я БЫСТРЕЕ ВСЕХ!</p>
              </div>
            </div>
          </div>

          <div className="text-dark mt-1 tender-form col-lg-4 col-md-12 pt-2 pb-0">
            <h2 className="text-center mb-2 h5 font-weight-bold">ПЛАНИРУЕТЕ УЧАСТВОВАТЬ В ТЕНДЕРЕ?</h2>
            <p className="text-center font-weight-normal small px-5">Получите список необходимых документов для участия в тендере.</p>
            <form className="form-group d-flex flex-column justify-items-center">
              <input type="number"
                onChange={e => this.phoneInput(e.target.value)}
                className="p-1 rounded border border-light mb-1"
                placeholder="Телефон" />
              <input type="email"
                onChange={e => this.emailInput(e.target.value)}
                className="p-1 rounded border border-light mb-1"
                placeholder="E-mail" />
              <input type="text"
                onChange={e => this.linkInput(e.target.value)}
                className="p-1 rounded border border-light mb-2"
                placeholder="Ссылка на тендер в прозорро" />
              <div className=" d-flex justify-content-center">
                <button className="btn text-white bkg-info px-4 py-1"
                  onClick={e => this.sendData(e)}>
                  Получить бесплатно</button>
              </div>
            </form>
          </div>

          <div className="col-lg-6 col-md-0"></div>

          <div className="col-lg-6 col-md-12 row py-0 px-2 m-0">
            <div className="big-num-item col-lg-4 col-md-4 col-sm-12 px-1 d-flex flex-column">
              <span className="txt-info big-num font-weight-bold">10</span>
              <span className="h6">За сегодня обработано тендеров</span>
            </div>
            <div className="big-num-item col-lg-4 col-md-4 col-sm-12 px-1 d-flex flex-column">
              <span className="txt-info big-num font-weight-bold">500</span>
              <span className="h6">За месяц обработано тендеров</span>
            </div>
            <div className="big-num-item col-lg-4 col-md-4 col-sm-12 px-1 d-flex flex-column block-wrap">
              <span className="txt-info big-num font-weight-bold">
                <span> 2,5</span>
                <small className="h6 min">минуты</small>
              </span>
              <span className="h6">Лучший результат на тендер</span>
            </div>
          </div>
        </header>


      </div>
    )
  }
}
