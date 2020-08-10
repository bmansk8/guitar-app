import React from 'react';
import './contactbar.css';
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{
  faEnvelope,
  faMapMarker
}from '@fortawesome/free-solid-svg-icons'

export const ContactBar = function () {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">IZM Guitars</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Guitars" id="basic-nav-dropdown">
            <NavDropdown.Item href="/blue">Bigsby Tele</NavDropdown.Item>
            <NavDropdown.Item href="/green">F Hole Tele</NavDropdown.Item>
            <NavDropdown.Item href="/purple">Texas Tele</NavDropdown.Item>
            <NavDropdown.Item href="/bronco">Bronco Tele</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Text><FontAwesomeIcon icon={faEnvelope} /> Email: Bmansk14@gmail.com</Navbar.Text>
          <Navbar.Text><FontAwesomeIcon icon={faMapMarker} /> Dahlonega Ga</Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}