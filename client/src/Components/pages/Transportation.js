import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import local from "../images/local.png";
import cycle from "../images/cycle.png";
import water from "../images/water.png";
import { Link } from 'react-router-dom'


export default function Transportation() {
    return (
 <Container>
   {/* ---------------------- category cards ------- */}
      <Row>
   <Col sm={ 4}>
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={local}/>
       <Card.Body>
       <Card.Title>Consume local and seasonal products</Card.Title>
         <Card.Text>
         By eating local, seasonal foods you can help reduce the environmental costs associated with your food. 
         Local produce is more likely to be ripened on the farm before being harvested and delivered. This food is fresher, 
         tastes better and is more nutritious.
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
       </Card.Body>
     </Card>
     </Col>
  <Col sm={ 4 }>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={cycle} />
       <Card.Body>
       <Card.Title>Cycle or use public transport</Card.Title>
         <Card.Text>
         Bicycle riding uses minimal fossil fuels and is a pollution-free mode of transport. Bikes reduce the need to build, service and dispose of cars.
          Bicycle riding conserves roadway and residential space, thereby providing opportunities for less concrete and more plant life in urban areas.
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
       </Card.Body>
     </Card>
     </Col>
     <Col sm={ 4 }>
     <Card style={{ width: '18rem'}}>
       <Card.Img variant="top" src={water} />
       <Card.Body>
         <Card.Title>Turn off the water while you brush your teeth or clean the dishes</Card.Title>
         <Card.Text>
         ust by turning off the tap while you brush your teeth in the morning and before bedtime, you can save up to 8 gallons of water
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
   
       </Card.Body>
     </Card>
         </Col>

     </Row>
     </Container>

      );
    }

