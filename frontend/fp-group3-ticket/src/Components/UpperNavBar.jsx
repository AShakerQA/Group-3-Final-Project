import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import AddTicketButton from "./TicketPage/AddTicketButton";
const UpperNavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navBar">
      <Navbar.Brand>
        <img
          src="https://i.imgur.com/Wa6jdim.png"
          alt="QA Logo"
          height="32px"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/tickets">
            <Button className="ml-3 qaColButton"> Ticket Hub </Button>
          </Link>
          <Link to="/solutions">
            <Button variant="primary" className="ml-3 qaColButton">
              {" "}
              Solutions{" "}
            </Button>
          </Link>
          <Link to="/">
            <Button variant="primary" className="ml-3 qaColButton">
              <PersonFill /> Log Out{" "}
            </Button>
          </Link>
          <AddTicketButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default UpperNavBar;
