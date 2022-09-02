import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import recycle from "../images/recycle.png";
import trash from "../images/trash.png";
import transportation from "../images/transportaion.png"

export default function Category() {
    return (

    
  <body class="categoryBody">
    <header class="nav">
      
 <h1 class="categoryHeader">Categories</h1> 

 </header>
 <main>

 <Container>
      <Row md={ 4}>
        {/* <Col>1 of 3
        </Col> */}


   {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recycle}  />
      <Card.Body>
      <Card.Title>Recycle</Card.Title>
        <Card.Text>
        Reducing, reusing, and recycling cuts down on the amount of raw material 
        needed to create new products, lessening the overall impact on natural resources.
        </Card.Text>
        <Button variant="primary"> <Link to="/recycle">Go to Recycle</Link></Button>
      </Card.Body>
    </Card>

   {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
     
 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={trash}  />
      <Card.Body>
      <Card.Title>Pick up trash</Card.Title>
        <Card.Text>
        Every piece of litter intercepted from the beach is one less piece of litter that doesn't end up in the ocean
        </Card.Text>
        <Button variant="primary"> <Link to="/trash">Go to Recycle</Link></Button>
      </Card.Body>
    </Card>
  

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={transportation} />
      <Card.Body>
        <Card.Title>Transportaion</Card.Title>
        <Card.Text>
        Cycling improves cardio-vascular and aerobic fitness, lowers blood pressure, 
        boosts energy, builds muscle, and improves coordination. 
        </Card.Text>
       <Button variant="primary"> <Link to="/transportation">Transportaion</Link></Button>
      </Card.Body>
    </Card>


    </Row>
    </Container>

 </main>
  </body>
    );
  }
  
