import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const OrderForm = props => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    props.showOrderForm();
    // setShow(true);
  };

  return (
    <>
      <Button variant="primary"
        className="btn text-white bkg-info mx-auto d-block my-3"
        onClick={handleShow}>
        Заказать
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default OrderForm;


export default class OrderForm extends Component {
  render() {
    return (
      <div className="">fasdfasdfasdfasdf
        
      </div>
    )
  }
}
