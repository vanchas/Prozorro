import React, { Component, useState } from 'react'
import './posibilities.scss'
import img1 from './image/1.png'
import img2 from './image/2.png'
import img3 from './image/3.png'
import img4 from './image/4.png'
import img5 from './image/5.png'
import img6 from './image/6.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const OrderForm = props => {
  const [show, setShow] = React.useState(false);
  const [preparationOfTenderBid, setPreparationOfTenderBid] = useState(false);
  const [validationOfTenderBid, setValidationOfTenderBid] = useState(false);
  const [competitorRejection, setCompetitorRejection] = useState(false);
  const [appeal, setAppeal] = useState(false);
  const [advocacy, setAdvocacy] = useState(false);
  const [bankGuarantee, setBankGuarantee] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [warnMess, setWarnMess] = useState('');
  const [successMess, setSuccessMess] = useState('');



  const handleClose = () => {
    setWarnMess('');
    setPreparationOfTenderBid(false);
    setValidationOfTenderBid(false);
    setCompetitorRejection(false);
    setAppeal(false);
    setAdvocacy(false);
    setBankGuarantee(false);
    setShow(false);
  };

  const handleShow = e => {
    setWarnMess('');
    const target = e.target.parentNode;

    if ($(target).attr('id') === 'card1') setPreparationOfTenderBid(!preparationOfTenderBid);
    if ($(target).attr('id') === 'card2') setValidationOfTenderBid(!validationOfTenderBid);
    if ($(target).attr('id') === 'card3') setCompetitorRejection(!competitorRejection);
    if ($(target).attr('id') === 'card4') setAppeal(!appeal);
    if ($(target).attr('id') === 'card5') setAdvocacy(!advocacy);
    if ($(target).attr('id') === 'card6') setBankGuarantee(!bankGuarantee);

    setShow(true);
  };

  const fetchData = async e => {
    e.preventDefault();
    // const phoneno = /^\d{12}$/;

    // if (phone.match(phoneno)) {
    if (
      phone.toString().length &&
      name.length &&
      (preparationOfTenderBid ||
        validationOfTenderBid ||
        competitorRejection ||
        appeal ||
        advocacy ||
        bankGuarantee)
    ) {
      await fetch('/2.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          preparationOfTenderBid,
          validationOfTenderBid,
          competitorRejection,
          appeal,
          advocacy,
          bankGuarantee,
          phone,
          name
        })
      })
        .then(() => {
          setPhone('');
          setName('');
          setWarnMess('');
          setSuccessMess('Спасибо за заказ! Мы с Вами свяжемся в ближайшее время.');
        }).then(() => {
          setTimeout(() => {
            handleClose();
            setSuccessMess('');
          }, 3000);
        })
        .catch(err => console.error("Error:", err))
    } else {
      setWarnMess('Заполните, пожалуйста, поля "Имя", "Телефон" и выберите один пункт из услуг.');
    }
  }

  return (
    <>
      <Button variant="info"
        className="btn text-white bkg-info mx-auto d-block my-3 border border-info font-weight-bolder"
        onClick={e => handleShow(e)}>
        Заказать
    </Button>

      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton
          className="bkg-light-info"
        >
          {successMess.length ?
            <Modal.Title>
              <div className="alert alert-light text-info text-center h5 border" role="alert">
                {successMess}
              </div>
            </Modal.Title>
            : null}
        </Modal.Header>
        <Modal.Body
          className="pb-0 bkg-light-info" >
          <form className="mb-2 d-flex container flex-column modal-form form-group">
            <label className="label" >
              <input type="checkbox" checked={preparationOfTenderBid ? true : false}
                onChange={() => setPreparationOfTenderBid(!preparationOfTenderBid)}
                className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5"> Подготовка тендерного предложения</span>
            </label>
            <label className="label">
              <input type="checkbox" checked={validationOfTenderBid ? true : false}
                onChange={() => setValidationOfTenderBid(!validationOfTenderBid)}
                className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Проверка тендерного предложения</span>
            </label>
            <label className="label">
              <input type="checkbox" checked={competitorRejection ? true : false}
                onChange={() => setCompetitorRejection(!competitorRejection)}
                className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Отклонение конкурента</span>
            </label>
            <label className="label">
              <input type="checkbox" checked={appeal ? true : false}
                onChange={() => setAppeal(!appeal)}
                className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Обжалование отклонения</span>
            </label>
            <label className="label">
              <input type="checkbox" checked={advocacy ? true : false}
                onChange={() => setAdvocacy(!advocacy)}
                className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Защита интересов в АМКУ</span>
            </label>
            <label className="label">
              <input type="checkbox" checked={bankGuarantee ? true : false}
                onChange={() => setBankGuarantee(!bankGuarantee)}
                className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Получение банковской гарантии</span>
            </label>

            <label className="mt-3">
              <input type="text" required
                placeholder="Имя"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  $('.alert-danger').slideUp();
                  setWarnMess('');
                }}
                className="form-control" />
            </label>
            {warnMess.length ?
              <div style={{ fontSize: '.8em' }}
                className="py-1 alert alert-danger m-0 text-center" role="alert">
                {warnMess}
              </div> : null}
            <label className="mt-2">
              <PhoneInput
                placeholder="Телефон"
                value={phone}
                required
                country={'ua'}
                className="form-control tel-input"
                onChange={phone => {
                  setPhone(phone);
                  $('.alert-danger').slideUp();
                  setWarnMess('');
                }}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer className="pt-0 bkg-light-info d-flex flex-column">
          <Button
            variant="info"
            className="btn text-white bkg-info mx-auto d-block mt-3 mb-1 border-0 font-weight-bolder"
            onClick={e => fetchData(e)}>
            Заказать
        </Button>
          <Button variant="light"
            className="m-0 border-0 text-info bkg-light-info"
            onClick={handleClose}>
            <u>Отмена</u>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default class Posibilities extends Component {
  render() {
    return (
      <div className="posibilities-block py-3">
        <h2 className="txt-info font-weight-bold text-center py-4">ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ</h2>

        <div className="cards-holder row p-0 m-0 w-100">
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3" id="card1">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <h5 className="h5 m-0 px-2 font-weight-bold card-title">Подготовка тендерного предложения</h5>
                <p className="card-text text-secondary">
                  Опытные юристы подготовят Ваше тендерное предложение для участия в тендере</p>
              </div>
            </div>
            <OrderForm />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3" id="card2">
            <div className="card">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <h5 className="h5 m-0 px-2 font-weight-bold card-title">Проверка тендерного предложения</h5>
                <p className="card-text text-secondary">
                  Опытные юристы проверят правильность подготовленного Вами тендерное предложение</p>
              </div>
            </div>
            <OrderForm />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3" id="card3">
            <div className="card">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <h5 className="h5 m-0 px-2 font-weight-bold card-title">Отклонение конкурента</h5>
                <p className="card-text text-secondary">
                  <b className="text-dark">(проверка предложений конкурента)</b> и подготовка требований для их отклонения</p>
              </div>
            </div>
            <OrderForm />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3" id="card4">
            <div className="card">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <h5 className="h5 m-0 px-2 font-weight-bold card-title">Обжалование отклонения</h5>
                <p className="card-text text-secondary">
                  Вас отклонили? Опытные юристы подготовят обжалование Вашего отклонения</p>
              </div>
            </div>
            <OrderForm />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3" id="card5">
            <div className="card">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <h5 className="h5 m-0 px-2 font-weight-bold card-title">Защита интересов в АМКУ</h5>
                <p className="card-text text-secondary">Опытные юристы защитят Ваши интересы в Антимонопольном комитете Украины</p>
              </div>
            </div>
            <OrderForm />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3" id="card6">
            <div className="card">
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <h5 className="h5 m-0 px-2 font-weight-bold card-title">Получение банковской гарантии на  самых выгодных условиях в Украине</h5>
                <p className="card-text text-secondary"></p>
              </div>
            </div>
            <OrderForm />
          </div>
        </div>
      </div>
    )
  }
}
