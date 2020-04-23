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
      fetch('/1.php', {
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
      <div className="about-wrapper position-relative">

        <div className="robot-holder">
          <img className="" src={BigRob} alt="bot" />
          <div className="img-border"></div>
        </div>

        <header className="row m-0 p-0 about-header">
          <div className="px-lg-3 px-md-0 col-lg-8 col-md-12 header-description">
            <div className="info-header-block">
              <div className="bkg-info text-white text-center about-header-description-top pt-2">
                <h1 className="font-weight-bold">Я ТЕНДЕРБОТ</h1>
                <p className="">УНИКАЛЬНАЯ КОМПЬЮТЕРНАЯ ПРОГРАММА</p>
              </div>
              <div className="about-header-description-top-inner font-weight-bolder pt-2 pb-3">
                <div className="about-header-description-top-inner-item">
                  <div className="inner-content">
                    <div className="img-holder pr-1">
                      <div className="img">
                        <img src={MolotSign} alt="." className="molot" />
                      </div>
                    </div>
                    <p className="header-text-item">ОБРАБОТАЮ ТЕНДЕРНУЮ ДОКУМЕНТАЦИЮ</p>
                  </div>
                </div>
                <div className="about-header-description-top-inner-item">
                  <div className="inner-content">
                    <div className="img-holder pr-2">
                      <div className="img">
                        <img className="pt-1" src={DocSign} alt="." />
                      </div>
                    </div>
                    <p className="header-text-item">СОСТАВЛЮ СПИСОК НЕОБХОДИМЫХ ДОКУМЕНТОВ</p>
                  </div>
                </div>
                <div className="about-header-description-top-inner-item">
                  <div className="inner-content">
                    <div className="img-holder pr-1">
                      <div className="img">
                        <img src={ScalesSign} alt="." />
                      </div>
                    </div>
                    <p className="header-text-item">ОТПРАВЛЮ ЕГО ВАМ ПОСЛЕ ПРОВЕРКИ ОПЫТНЫМ ЮРИСТОМ.</p>
                  </div>
                </div>
              </div>
              <div className="faster bkg-info text-white text-center">
                <p className="w-100 p-0 m-0 font-weight-bold">Я БЫСТРЕЕ ВСЕХ!</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 text-dark tender-form ">
            <h2 className="text-center w-100 font-weight-bold m-0 py-3">ПЛАНИРУЕТЕ УЧАСТВОВАТЬ В ТЕНДЕРЕ?</h2>
            <p className="text-center font-weight-normal small">Получите список необходимых документов для участия в тендере.</p>
            <form className="form-group d-flex flex-column justify-items-center">
              <input type="number"
                onChange={e => this.phoneInput(e.target.value)}
                className="form-control rounded border border-light"
                placeholder="Телефон" />
              <input type="email"
                onChange={e => this.emailInput(e.target.value)}
                className="form-control rounded border border-light"
                placeholder="E-mail" />
              <input type="text"
                onChange={e => this.linkInput(e.target.value)}
                className="form-control rounded border border-light"
                placeholder="Ссылка на тендер в прозорро" />
              <div className="">
                <button className="mx-auto d-block btn text-white bkg-info"
                  onClick={e => this.sendData(e)}>
                  Получить бесплатно</button>
              </div>
            </form>
          </div>

          <div className="col-lg-6 col-md-0 "></div>

          <div className="big-num-block col-lg-6 col-md-12 row px-0 py-3 m-0 w-100">
            <div className="big-num-item col-lg-4 col-md-12">
              <span className="txt-info big-num font-weight-bold">10</span>
              <span className="num-disc">За сегодня обработано тендеров</span>
            </div>
            <div className="big-num-item col-lg-4 col-md-12">
              <span className="txt-info big-num font-weight-bold">500</span>
              <span className="num-disc">За месяц обработано тендеров</span>
            </div>
            <div className="big-num-item block-wrap col-lg-4 col-md-12 pr-0">
              <span className="txt-info big-num font-weight-bold">
                <span> 2,5</span>
                <small className="min">минуты</small>
              </span>
              <span className="num-disc">Лучший результат на тендер</span>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
