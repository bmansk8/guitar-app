import React from 'react';
import './page.css'
import blue1 from './photos/blue1.jpg'
import green1 from './photos/green1.jpg'
import purple1 from './photos/purple1.jpg'
import {
  Jumbotron,
  Button,
  Card,
  Badge,
  Container,
  Row,
  Col
} from 'react-bootstrap'

export default function Page() {
  return (
    <div>

      <Jumbotron>
        <h1>IZM Guitars</h1>
        <p>
          Just a dad and son building great, qaulity instruments, for a reasonable price.
        </p>
      </Jumbotron>

      <Container fluid>
        <Row>
          <Col>
            <div className='collection rounded'>
              <h2>Contact Us</h2>
              <p>Cupidatat anim aliquip enim esse aute eu nostrud pariatur in ea cillum magna.
              Minim velit consectetur proident nulla pariatur. Fugiat anim aute adipisicing ipsum.
              Aute tempor elit magna ea sunt incididunt. Eu cillum labore ipsum duis do aliquip sint mollit ea consequat.</p>
            </div>
          </Col>
          <Col>
            <div id='about' className='rounded collection'>
              <h2>About Us</h2>
              <p>Ut pariatur eiusmod dolor incididunt cillum sit sunt nostrud incididunt sit cupidatat culpa.
              Est duis excepteur eiusmod officia esse nulla irure consectetur reprehenderit dolor mollit id qui.
              Amet esse ipsum velit fugiat deserunt laborum sunt anim.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <h2 id='teleCollection'>Tele Collection</h2>
      <hr />

      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={blue1} />
              <Card.Body>
                <Card.Title>Bigsby Tele <Badge variant='success'>New</Badge> </Card.Title>
                <Card.Text>
                  This is our custom bigsy tremelo style tele! Sporting a amazing dark to light blue fade,
                  humbuckers, and F hole style body. this tele is warm and fun.
                </Card.Text>
                <Button variant="primary">Check me out!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={green1} />
              <Card.Body>
                <Card.Title>F Hole Tele</Card.Title>
                <Card.Text>
                  This is our standard style F hole tele. Sporting light to dark green fade and single coils.
                  Get ready for a twangy, yet warm sound.
                </Card.Text>
                <Button variant="primary">Check me out!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={purple1} />
              <Card.Body>
                <Card.Title>Texas Tele</Card.Title>
                <Card.Text>
                  This is our texas blinged out tele. Sporting a wilkinson p90 in the neck, a alnicove single coil, bridge, and plate,
                  and that awesome purple burst finish.
                </Card.Text>
                <Button variant="primary">Check me out!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

{/* 
    We have been in the music seen for over 30 years and got into building guitars in 2019. Since then
    we have built and modded serveral guitars and finnaly made so many that the wife said we had to sell some!
    So if your interested please take a look at our gallery bellow.
*/}