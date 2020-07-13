import React from 'react';
import { ContactBar } from '../services/contactbar';
import { Carousel } from 'react-bootstrap'
import green1 from '../photos/green1.jpg'
import green2 from '../photos/green2.jpg'
import green3 from '../photos/green3.jpg'
import green4 from '../photos/green4.jpg'
import green5 from '../photos/green5.jpg'
import './details.css'



export const Green = function () {
  return (
    <div>
      <ContactBar />
      <h1 className='text-center'>F Hole Tele</h1>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={green1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Green Fade</h3>
            <p>A custom light to dark green fade</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={green2}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Head Stock</h3>
            <p>A custom small shape headstock</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={green3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Top Body</h3>
            <p>Dual single coils, custom pickguard, and F hole</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={green4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Back of Body</h3>
            <p>Sports a light to dark green finish</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={green5}
            alt="Fith slide"
          />
          <Carousel.Caption>
            <h3>Machines</h3>
            <p>Standard machine heads</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <footer></footer>

    </div>
  )
}