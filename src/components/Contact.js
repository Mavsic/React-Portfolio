import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ContactForm from '../components/ContactForm';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../App.css';

function Contact() {
  return (
    <div className='container'>
       
            <Container className="text-center">
                <div className="p-md-5">
                    <h1>Get in Touch</h1>
                </div>
            </Container>
       

        <Container fluid className="shadow bg-light mb-5">
            <Container className="p-4">
                <Row>
                    <Col>
                        <Container>
                            <h4 style={{color: "#F06543"}}>Contact Info</h4>
                            <p>
                                <a href="mailto:muminova.m@homail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    muminova.m@homtail.com
                                </a>
                            </p>
                            
                            <p>
                                <a href="https://github.com/Mavsic" target='_blank'>
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    Mavsic
                                </a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com" target='_blank'>
                                    <span className="pr-3">
                                        <FaLinkedin />
                                    </span>
                                    Mavsic
                                </a>
                            </p>
                        </Container>
                    </Col>

                    <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                        <Container>
                            <h4 style={{color: "#F06543"}}>Send a Message</h4>
                            <ContactForm />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default Contact;