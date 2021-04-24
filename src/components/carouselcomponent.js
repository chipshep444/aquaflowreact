import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';


const mystyle = {
  height: "auto",
  width: "100%",
};

const mystyle2 = {
  color: "white",
};


function Caro() {
  return (

    <Carousel className="d-none d-lg-block" style={mystyle}>
      <Carousel.Item interval={1000}> 
        <img 
          className="d-block w-100"
          src="/images/caro_01c.jpg"
          alt="24 Hour Emergency Service"
        />
        <Carousel.Caption>
          <h3 id="caro2">24 Hour Emergency Service</h3>
          <button type="button" class="btn btn-dark"> <Link style={mystyle2} to="/emergency">READ MORE</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/caro_02c.jpg"
          alt="Home Water Filtration"
        />

        <Carousel.Caption>
          <h3 id="caro2">Home Water Filtration</h3>
          <button type="button" class="btn btn-dark"><Link style={mystyle2} to="/homewater">READ MORE</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/caro_03c.jpg"
          alt="Garbage Disposal Repair and Installation"
        />

        <Carousel.Caption>
          <h3 id="caro2">Garbage Disposal Repair and Installation</h3>
          <button type="button" class="btn btn-dark"><Link style={mystyle2} to="/garbagedisposal">READ MORE</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/caro_04c.jpg"
          alt="Leak Detection"
        />

        <Carousel.Caption>
          <h3 id="caro2">Leak Detection</h3>
          <button type="button" class="btn btn-dark"><Link style={mystyle2} to="/leakdetection">READ MORE</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/caro_05c.jpg"
          alt="Commercial Plumbing"
        />

        <Carousel.Caption>
          <h3 id="caro2">Commercial Plumbing</h3>
          <button type="button" class="btn btn-dark"><Link style={mystyle2} to="/commercial">READ MORE</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/caro_06c.jpg"
          alt="We Serve the Orlando Area!"
        />

        <Carousel.Caption>
          <h3 id="caro2">We Serve the Orlando Area!</h3>
          <p id="caro2">We Serve the Orlando Area!</p>
          <p id="caro3">Metro West ~ Windermere ~ Winter Garden ~ Casselberry</p>
          <p id="caro3">Ocoee ~ Winter Park ~ Altamonte Springs ~ Kissimmee</p>
          <p id="caro3">Clermont ~ Lake Mary ~ Sanford ~ Winter Springs</p>
          <button type="button" class="btn btn-dark"><Link style={mystyle2} to="/locations">READ MORE</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Caro;