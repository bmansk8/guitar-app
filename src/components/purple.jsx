import React from 'react';
import { ContactBar } from '../services/contactbar';
import { Carousel } from 'react-bootstrap'
import purple1 from '../photos/purple1.jpg'
import purple2 from '../photos/purple2.jpg'
import purple3 from '../photos/purple3.jpg'
import purple4 from '../photos/purple4.jpg'
import purple5 from '../photos/purple5.jpg'
import './details.css'



export const Purple = function () {
  return (
    <div>
      <ContactBar />
      <h1 className='text-center'>Texas Tele</h1>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={purple1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Purple Sunburst</h3>
            <p>A custom purple sunburst finish</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={purple2}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Head Stock</h3>
            <p>A fender strat style headstock</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={purple3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Top Body</h3>
            <p>Wilkinson p90, and alnicove single coil, plate, and bridge</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={purple4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Back of Body</h3>
            <p>String through body, and contours</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={purple5}
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