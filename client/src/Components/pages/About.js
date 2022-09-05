import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import genesisRosales from "../images/genesisRosales.png";
import davidNavarreteAyala from "../images/davidNavarreteAyala.png";
import damienArmstrong from "../images/damienArmstrong.png";
import jamesBennett from "../images/jamesBennett.png";

export default function About() {
    return (
     <Container>
      <div className="row no-gutters">
      <Col className="col-sm">
      <Card style={{ height: '18rem', width: '18rem' }}>
        <Card.Img className="card-img-top" src={ genesisRosales.png } />
        <Card.Body>
        <Card.Title>Genesis Rosales</Card.Title>
          <Card.Text>
            Graduate of the UC Berkeley Full Stack Coding Bootcamp
          </Card.Text>
          {/* <Button variant="info"> <Link to="github">GitHub Link</Link></Button> */}
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-sm">
      <Card style={{ height: '18rem', width: '18rem' }}>
        <Card.Img variant="top" src={ davidNavarreteAyala.png } />
        <Card.Body>
        <Card.Title>David Navarrete Ayala</Card.Title>
          <Card.Text>
            Graduate of the UC Berkeley Full Stack Coding Bootcamp
          </Card.Text>
          {/* <Button variant="info"> <Link to="github">GitHub link</Link></Button> */}
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-sm">
      <Card style={{ height: '18rem', width: '18rem' }}>
        <Card.Img variant="top" src={ damienArmstrong.png } />
        <Card.Body>
        <Card.Title>Damien Armstrong</Card.Title>
          <Card.Text>
            Graduate of the UC Berkeley Full Stack Coding Bootcamp
          </Card.Text>
          {/* <Button variant="info"> <Link to="github">GitHub Link</Link></Button> */}
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-sm">
      <Card style={{ height: '18rem', width: '18rem' }}>
        <Card.Img variant="top" src={ jamesBennett.png } />
        <Card.Body>
        <Card.Title>James Bennett</Card.Title>
          <Card.Text>
            Graduate of the UC Berkeley Full Stack Coding Bootcamp
          </Card.Text>
          {/* <Button variant="info"> <Link to="github">GitHub link</Link></Button> */}
        </Card.Body>
      </Card>
      </Col>
      </div>
     </Container>
    );
  }