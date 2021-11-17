import React from "react";
import { Container, Navbar } from "react-bootstrap";

const navBarStyle = {
  backgroundColor: "lightblue",
};

// Using object destructuring on props.title
const Header = ({ title }) => {
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
