import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Hedaer from '../Components/Hedaer'
import Testimonial from '../Components/Testimonial'

const Contact = () => {
  return (
    <>
      <Hedaer title="Get in touch" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <Container className="contact-page">
        <Row>
          <Col md={6} className='mb-lg-0 mb-md-3 mb-4'>
            <h2 className='h-font'>Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2 className='h-font'>Contact Details</h2>
            <ul className="contact-details p-lg-4 p-md-2 p-3">
              <li><strong>Address:</strong> 1234 Street Name, City, Country</li>
              <li><strong>Phone:</strong> (123) 456-7890</li>
              <li><strong>Email:</strong> contact@example.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Testimonial />
    </>
  )
}

export default Contact