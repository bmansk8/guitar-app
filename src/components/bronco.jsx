import React from 'react';
import { ContactBar } from '../services/contactbar';
import { Carousel } from 'react-bootstrap'
import bronco1 from '../photos/bronco1.jpg'
import bronco2 from '../photos/bronco2.jpg'
import bronco3 from '../photos/bronco3.jpg'
import './details.css'

export const Bronco = function () {
  return (
    <div>
      <ContactBar />
      <h1 className='text-center'>Bronco Tele</h1>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={bronco1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bronco Relic</h3>
            <p>This tele has been sanded and reliced to match the maple fretboard</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={bronco2}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Back of body</h3>
            <p>1.5mm distance from the frets, meaning almost shredder like playability</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={bronco3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Hardware</h3>
            <p>We have replaced both pickups, bridge, plate, and switch</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <footer></footer>

    </div>
  )
}