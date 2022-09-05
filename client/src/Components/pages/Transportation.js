import React from "react";
 import Card from 'react-bootstrap/Card';
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import plastic from "../images/plastic.png";
import can from "../images/can.png";
import metal from "../images/metal.png"


export default function Transportation() {
    return (
 <Container>
      <Row>
      
    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
   <Col sm={ 4}>
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={{ plastic }}/>
       <Card.Body>
       <Card.Title>Incorporate walking or biking</Card.Title>
         <Card.Text>
         Incorporate walking or biking to some of your regular short-trip destinations.
          In most instances, you can walk a mile in less than 20 minutes. This is a great way to
           add exercise to your busy schedule.
         </Card.Text>
         <Button variant="info"> DONE </Button>
       </Card.Body>
     </Card>
     </Col>
    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
     
  <Col sm={ 4 }>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={{ can }} />
       <Card.Body>
       <Card.Title>Save Electricitty</Card.Title>
         <Card.Text>
         Turn off lights and unplug devices when you’re not using them. Every little action adds up!
         </Card.Text>
         <Button variant="info"> DONE</Button>
       </Card.Body>
     </Card>
     </Col>
  {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
  
     <Col sm={ 4 }>
     <Card style={{ width: '18rem'}}>
       <Card.Img variant="top" src={{ metal }} />
       <Card.Body>
         <Card.Title>Recycle Metal</Card.Title>
         <Card.Text>
         steel recycling efforts save 75 percent of the overall energy used in production from
          raw materials. This has huge benefits in the fight to save natural resources, and prevent 
          excess greenhouse gas emissions 
         </Card.Text>
        <Button variant="info"> DONE </Button>
   
       </Card.Body>
     </Card>
         </Col>

     </Row>
     </Container>

      );
    }

