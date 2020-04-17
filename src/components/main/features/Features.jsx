import React, { Component } from 'react'
import './features.scss'
import BlueArrow from './image/1-blue-arrow.png'
import LilRob from './image/2-lil-rob.png'
import Person from './image/3-person.png'
import Bag from './image/4-bag.png'
import Doc from './image/5-doc.png'
import People from './image/6-people.png'

export default class Features extends Component {
  render() {
    return (
      <div className="text-center features-block mt-4 py-5">
        <h2 className="h2 py-2 txt-info font-weight-bold w-75 mx-auto">ПЛАНИРУЕТЕ УЧАСТВОВАТЬ В ТЕНДЕРЕ ИЛИ ГОТОВИТЕ ДОКУМЕНТЫ ДЛЯ ТЕНДЕРА?</h2>
        <p className="px-3">Одна из главных причин отклонения участников в тендерах это <button className="text-danger btn p-0 m-0"><u><b>НЕПОЛНЫЙ СПИСОК ПОДАННЫХ ДОКУМЕНТОВ.</b></u></button> Неподача любого документа или справки ведет к отклонению тендерного предложения, а это значит Вы ничего не заработали и зря потратили время, силы и деньги!</p>
        <p className="px-3">
          <strong className="w-100 h5 txt-info font-weight-bold">ДЛЯ РЕШЕНИЯ ЭТОЙ ПРОБЛЕМЫ МЫ СОЗДАЛИ ПРОГРАММУ ТЕНДЕРБОТ,</strong><br/>
           на основе искусственного интеллект, которая анализирует тендерную документацию и составляет список необходимых документов и справок для участия в тендере.</p>

        <div>
          <h3 className="txt-info font-weight-bold py-3">КАК ЭТО РАБОТАЕТ</h3>

          <div className="row m-0 px-0 py-5 features-cards-group">

            <div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
              <div className="card-image-holder">
                <img src={BlueArrow} alt="arrow" />
              </div>
              <div className="bkg-info py-2">
                <div className="px-1 h-100 py-2">
                  <b className="txt-info">01.</b>
                  <p className="px-2">Вы отправляетe ссылку на тендер</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
              <div className="bkg-info py-2">
                <div className="px-1 h-100 py-2">
                  <b className="txt-info">02.</b>
                  <p className="px-2">
                    <strong>ТЕНДЕРБОТ</strong> готовит список необходимых документов для участия в тендере
                </p>
                </div>
              </div>
              <div className="card-image-holder">
                <img src={LilRob} alt="bot" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
              <div className="card-image-holder">
                <img src={Person} alt="person" />
              </div>
              <div className="bkg-info py-2">
                <div className="px-1 h-100 py-2">
                  <b className="txt-info">03.</b>
                  <p className="px-2">Опытный юрист проверяет этот список</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
              <div className="bkg-info py-2">
                <div className="px-1 h-100 py-2">
                  <b className="txt-info">04.</b>
                  <p className="px-2">После проверки
                  Вы получаете
                  этот список
                документов на email</p>
                </div>
              </div>
              <div className="card-image-holder">
                <img src={Bag} alt="documents" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
              <div className="card-image-holder">
                <img src={Doc} alt="document" />
              </div>
              <div className="bkg-info py-2">
                <div className="px-1 h-100 py-2">
                  <b className="txt-info">05.</b>
                  <p className="px-2">Вы готовите по
                  этому списку
                  документы или
                  проверяете все
                ли документы вы подготовили</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
              <div className="bkg-info py-2">
                <div className="px-1 h-100 py-2">
                  <b className="txt-info">06.</b>
                  <p className="px-2">Выигрываете тендер</p>
                </div>
              </div>
              <div className="card-image-holder">
                <img src={People} alt="comunity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
