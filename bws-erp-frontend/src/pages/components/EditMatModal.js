import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";



function EditMatsModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Link  onClick={handleShow}>
        ⚙
      </Link>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Form >
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>Edit:</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-2" controlId="formItemName">
            <Form.Label>Material</Form.Label>
            <Form.Control defaultValue={props.props.name} />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formItemName">
            <Form.Label>Quantity</Form.Label>
            <Form.Control defaultValue={props.props.quantity} />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formItemName">
            <Form.Label>Cost</Form.Label>
            <Form.Control  defaultValue={props.props.cost} />
          </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger">
              Delete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">Update</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditMatsModal;