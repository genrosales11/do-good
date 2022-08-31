import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import turtle from "../../Components/images/turtle.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Category() {
    return (

    
  <body class="categoryBody">
    <header>
 <h1 class="categoryHeader">Categories</h1> 
 </header>
 <main>

 <Container>
      <Row md={4}>
        <Col>1 of 3
        </Col>

 {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
        <Col xs={6}>2 of 3
        <Card.Img variant="top" src={turtle} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        
        </Col>

   {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
        <Col>3 of 3
         <Card.Img variant="top" src={turtle} />
      <Card.Body>
        <Card.Title>Transportation</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/transportation" variant="primary">Go To Transportation</Button>
      </Card.Body>

      </Col>

   {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
        <Col>3 of 3
         <Card.Img variant="top" src={turtle} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        
        
        </Col>
      </Row>
    </Container>
 

 </main>
  </body>
    );
  }
  
