import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    //mt = margin top
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text" //defining type of the input field
                  //Value={word} makes the input a controlled input
                  // Connect the value of this input with state application
                  value={word} //word is part of the state of app component
                  //update the state of the application whenever there is a change in the input
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new images"
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
