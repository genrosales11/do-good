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
      <div>
      <Container className="container">
        <div id="aboutCards" className="row no-gutters">
        <Col className="col-sm">
        <Card style={{ height: '18rem', width: '18rem' }}>
          <Card.Img className="top" src={ genesisRosales.png } alt='image of Genesis' />
          <Card.Body>
          <Card.Title>Genesis Rosales</Card.Title>
            <Card.Text>
              Graduate of the UC Berkeley Full Stack Coding Bootcamp
            </Card.Text>
            {/* <Button variant="genbtn"> <Link to="github">GitHub Link</Link></Button> */}
          </Card.Body>
        </Card>
        </Col>
        <Col className="col-sm">
        <Card style={{ height: '18rem', width: '18rem' }}>
          <Card.Img variant="top" src={ davidNavarreteAyala.png } alt='image of David' />
          <Card.Body>
          <Card.Title>David Navarrete Ayala</Card.Title>
            <Card.Text>
              Graduate of the UC Berkeley Full Stack Coding Bootcamp
            </Card.Text>
            {/* <Button variant="davbtn"> <Link to="github">GitHub link</Link></Button> */}
          </Card.Body>
        </Card>
        </Col>
        <Col className="col-sm">
        <Card style={{ height: '18rem', width: '18rem' }}>
          <Card.Img variant="top" src={ damienArmstrong.png } alt='image of Damien' />
          <Card.Body>
          <Card.Title>Damien Armstrong</Card.Title>
            <Card.Text>
              Graduate of the UC Berkeley Full Stack Coding Bootcamp
            </Card.Text>
            {/* <Button variant="dambtn"> <Link to="github">GitHub Link</Link></Button> */}
          </Card.Body>
        </Card>
        </Col>
        <Col className="col-sm">
        <Card style={{ height: '18rem', width: '18rem' }}>
          <Card.Img variant="top" src={ jamesBennett.png } alt='image of James' />
          <Card.Body>
          <Card.Title>James Bennett</Card.Title>
            <Card.Text>
              Graduate of the UC Berkeley Full Stack Coding Bootcamp
            </Card.Text>
            {/* <Button variant="jambtn"> <Link to="github">GitHub link</Link></Button> */}
          </Card.Body>
        </Card>
        </Col>
        </div>
      </Container>
     </div>
    );
  }