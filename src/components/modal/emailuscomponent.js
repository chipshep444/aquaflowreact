import React, {useState} from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

function EmailUsModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button color="info" onClick={handleShow}>
            Email Us
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <img id="topmainlogo"className="img-fluid" src="images/aquaflowlogo-v1.jpg" alt="Aqauflow Plumbing"/>
          <Modal.Header closeButton>
            <Modal.Title>Service Request Form:</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicStreetAddress">
                        <Form.Label>Street Address:</Form.Label>
                        <Form.Control type="text" placeholder="Street Address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCity">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="text" placeholder="City" />
                    </Form.Group>
                    <Form.Group controlId="formBasicState">
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="text" placeholder="State" />
                    </Form.Group>
                    <Form.Group controlId="formBasicZipCode">
                        <Form.Label>Postal / Zip Code:</Form.Label>
                        <Form.Control type="text" placeholder="Zip Code" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCustomer">
                      <Form.Label>Are you a current Service Agreement Customer?:</Form.Label>
                      <Form.Control as="select" custom>
                        <option>Yes</option>
                        <option>No</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicCoupon">
                        <Form.Label>Coupon Code:</Form.Label>
                        <Form.Control type="text" placeholder="Coupon Code" />
                    </Form.Group>
                    <Form.Group controlId="formBasicServiceNeeds">
                      <Form.Label>Service Needs for:</Form.Label>
                      <Form.Control as="select" custom>
                        <option>Plumbing</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Brief description of services requested:</Form.Label>
                        <Form.Control as="textarea" placeholder="Brief description of services" rows={4}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="text" placeholder="Enter date"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicTime">
                      <Form.Label>What Time for Service?:</Form.Label>
                      <Form.Control as="select" custom>
                        <option>8:00 AM</option>
                        <option>8:30 AM</option>
                        <option>9:00 AM</option>
                        <option>9:30 AM</option>
                        <option>10:00 AM</option>
                        <option>10:30 AM</option>
                        <option>11:00 AM</option>
                        <option>11:30 AM</option>
                        <option>1:00 PM</option>
                        <option>1:30 PM</option>
                        <option>2:00 PM</option>
                        <option>2:30 PM</option>
                        <option>3:00 PM</option>
                        <option>3:30 PM</option>
                        <option>4:00 PM</option>
                        <option>4:30 PM</option>
                      </Form.Control>
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

  export default EmailUsModal;