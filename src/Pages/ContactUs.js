import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Card from 'react-bootstrap/Card';
// import career from '../pages/contactus.png'
function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_56mi3gj',
        'template_otshs2a',
        e.target,
        'eou79h15bq8zrnHUu'
      )
      .then(
        (result) => {
          console.log('Email sent successfully!');
          alert("Email Send Sucessfully")
        },
        (error) => {
          console.error('Error sending email:', error);
          alert("Error sending email")
        }
      );

    e.target.reset();
  }

  return (
    <Form onSubmit={sendEmail}>
    <Row style={{marginLeft:'100px'}}>
      <Col md={6}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
      </Col>
      {/* <Col md={6}>
      <Card.Img style={{height:'50%', width:'50%'}}  src={career} />
      </Col> */}
    </Row>

    <Row  style={{marginLeft:'100px'}}>
      <Col md={6}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>
      </Col>
    </Row>

    <Row  style={{marginLeft:'100px'}}>
      <Col md={6}>
        <Form.Group controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} />
        </Form.Group>
      </Col>
    </Row>

    <Row  style={{marginLeft:'530px',marginTop:'20px'}}>

      <Col md={12}>
        <Button variant="primary" type="submit">
          Send Email
        </Button>
      </Col>
    </Row>
  </Form>
  );
}

export default ContactForm;