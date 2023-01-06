import React from 'react'
import './LandingPage.css'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
// import Header from '../../Header/Header';
// import Footer from '../../Footer/Footer';

const LandingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className='main'>
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to Line Up</h1>
                <p className="subtitle">One Safe place for all your notes.</p>
              </div>
              <div className="buttonContainer">
                <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
                </Link>
                <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>

      </div>
      {/* <Footer /> */}
    </>
  )
}

export default LandingPage