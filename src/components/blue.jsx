import React from 'react';
import { ContactBar } from '../services/contactbar';
import { Carousel } from 'react-bootstrap'
import blue1 from '../photos/blue1.jpg'
import blue2 from '../photos/blue2.jpg'
import blue3 from '../photos/blue3.jpg'
import blue4 from '../photos/blue4.jpg'
import blue5 from '../photos/blue5.jpg'
import './details.css'



export const Blue = function () {
  return (
    <div>
      <ContactBar />
      <h1 className='text-center'>Bigsby Tele</h1>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={blue1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Blue Fade</h3>
            <p>A custom black to blue fade</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={blue2}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Head Stock</h3>
            <p>A custom sickle shaped headstock</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={blue3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Top Body</h3>
            <p>Dual humbuckers, bigsby style bridge, and F hole</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={blue4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Wood Grain</h3>
            <p>Sports a all natural wood grain finish</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={blue5}
            alt="Fith slide"
          />
          <Carousel.Caption>
            <h3>Machines</h3>
            <p>Grover locking 18 to 1 machine heads</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <footer></footer>

    </div>
  )
}