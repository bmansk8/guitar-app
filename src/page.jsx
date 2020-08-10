import React from 'react';
import blue1 from './photos/blue1.jpg';
import green1 from './photos/green1.jpg';
import purple1 from './photos/purple1.jpg';
import bronco1 from './photos/bronco1.jpg'
import { ContactBar } from './services/contactbar.jsx';
import {
  Jumbotron,
  Button,
  Card,
  Badge,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import './page.css';

export default function Page() {
  return (
    <div>
      <ContactBar />

      <Container fluid id='jumbo'>
        <Jumbotron>
          <h1>IZM Guitars</h1>
          <p>
            Just a father and son building great, quality instruments, for a reasonable price.
          </p>
        </Jumbotron>
      </Container>


      <Container id='section' fluid>
        <Row>
          <Col sm={4}>
            <div className='collection rounded'>
              <h2>Contact Us</h2>
              <p>So while this website is a simple coding project for me, the guitars are real! If you are interested in buying one, just shoot me an email.
              I will try to get back to you as soon as I can.</p>
            </div>
          </Col>
          <Col sm={4}>
            <div id='about' className='rounded collection'>
              <h2>About Us</h2>
              <p>We have been in the music scene for over 30 years and got into building guitars in 2019.
              Since then we have built and modded several guitars and finally made so many that the wife said we had to sell some!
              So if you&apos;re interested please take a look at our gallery below.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <h2 id='teleCollection'>Tele Collection</h2>
      <hr />

      <Container fluid id='guitars1'>
        <Row>
          <Col lg={4} md={6}>
            <Card>
              <Card.Img variant="top" src={blue1} />
              <Card.Body>
                <Card.Title>Bigsby Tele <Badge variant='success'>New</Badge> </Card.Title>
                <Card.Text>
                  This is our custom bigsby tremolo style tele! Sporting an amazing dark to light blue fade, humbuckers, and F hole style body. This tele is warm and fun.
                </Card.Text>
                <Button href='/blue' variant="primary">Check me out!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card>
              <Card.Img variant="top" src={green1} />
              <Card.Body>
                <Card.Title>F Hole Tele <Badge variant='danger'>Sold</Badge></Card.Title>
                <Card.Text>
                  This is our standard style F hole tele. Sporting light to dark green fade and single coils.
                  Get ready for a twangy, yet warm sound.
                </Card.Text>
                <Button href='/green' variant="secondary">Check me out!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card >
              <Card.Img variant="top" src={purple1} />
              <Card.Body>
                <Card.Title>Texas Tele</Card.Title>
                <Card.Text>
                  This is our Texas blinged out tele. Sporting a wilkinson p90 in the neck, a Alnicove single coil, bridge, and plate, and that awesome purple burst finish.
                </Card.Text>
                <Button href='/purple' variant="primary" >Check me out!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card >
              <Card.Img variant="top" src={bronco1} />
              <Card.Body>
                <Card.Title>Bronco Tele</Card.Title>
                <Card.Text>
                This is a refurbished squier Tele that has a relic body, maple fretboard, and is setup for insane playability.
                </Card.Text>
                <Button href='/bronco' variant="primary" >Check me out!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}