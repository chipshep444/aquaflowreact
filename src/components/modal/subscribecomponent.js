import React, {useState} from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'


function SubscribeModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button color="info" onClick={handleShow}>
            Subscribe
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <img id="topmainlogo"className="img-fluid" src="images/aquaflowlogo-v1.jpg" alt="Aqauflow Plumbing"/>
          <Modal.Header closeButton>
            <Modal.Title>Subscribe to Our Newsletter!</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button color="info" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
          <Modal.Footer>
            <Button color="info" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default SubscribeModal;