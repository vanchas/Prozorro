import React, { Component } from 'react'
import './posibilities.scss'
import img1 from './image/1.png'
import img2 from './image/2.png'
import img3 from './image/3.png'
import img4 from './image/4.png'
import img5 from './image/5.png'
import img6 from './image/6.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export const OrderForm = props => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="info"
        className="btn text-white bkg-info mx-auto d-block my-3 border border-info font-weight-bolder"
        onClick={handleShow}>
        Заказать
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton
          className="bkg-light-info"
        >{/* <Modal.Title></Modal.Title> */}
        </Modal.Header>
        <Modal.Body
          className="pb-0 bkg-light-info" >
          <form className="mb-2 d-flex container flex-column modal-form form-group">
            <label className="label">
              <input type="checkbox" className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5"> Подготовка тендерного предложения</span>
            </label>
            <label className="label">
              <input type="checkbox" className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Проверка тендерного предложения</span>
            </label>
            <label className="label">
              <input type="checkbox" className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Отклонение конкурента</span>
            </label>
            <label className="label">
              <input type="checkbox" className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Обжалование отклонения</span>
            </label>
            <label className="label">
              <input type="checkbox" className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Защита интересов в АМКУ</span>
            </label>
            <label className="label">
              <input type="checkbox" className="form-check-input" />
              <span className="checkmark"></span>
              <span className="ml-5">Получение банковской гарантии</span>
            </label>

            <label className="mt-3">
              <input type="text"
                placeholder="Имя"
                className="form-control" />
            </label>
            <label className="mt-2">
              <input type="text"
                placeholder="Телефон"
                className="form-control" />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer className="pt-0 bkg-light-info d-flex flex-column">
          <Button
            variant="info"
            className="btn text-white bkg-info mx-auto d-block mt-3 mb-1 border border-info font-weight-bolder"
            onClick={handleClose}>
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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="posibilities-block py-3">
        <h2 className="txt-info font-weight-bold text-center py-3">ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ</h2>

        <div className="cards-holder row p-0 m-0 w-100">
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3">
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
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3">
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
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3">
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
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3">
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
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3">
            <div className="card">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body p-1">
                <h5 className="h5 m-0 px-2 font-weight-bold card-title">Защита интересов в АМКУ</h5>
                <p className="card-text text-secondary">Опытные юристы защитят Ваши интересы в Антимонопольном комитете Украины</p>
              </div>
            </div>
            <OrderForm />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 m-0 px-2 text-center card-holder py-3">
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
