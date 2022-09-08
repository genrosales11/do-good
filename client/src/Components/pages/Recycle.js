import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import plastic from "../images/plastic.png";
import can from "../images/can.png";
import metal from "../images/metal.png"
import { Link } from 'react-router-dom'


export default function Category() {
    return (
 <Container>
      <Row>
       {/* ---------------------- category cards ------- */}
   <Col sm={ 4}>
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={plastic}/>
       <Card.Body>
       <Card.Title>Recycle Plastic</Card.Title>
         <Card.Text>
         Plastics recycling keeps still-useful materials out of landfills and encourages businesses
          to develop new and innovative products made from them.
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
       </Card.Body>
     </Card>
     </Col>
  <Col sm={ 4 }>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={can} />
       <Card.Body>
       <Card.Title>Aluminum Cans</Card.Title>
         <Card.Text>
         Recycling aluminum saves up to 95% of the energy wasted when manufacturing cans from new, raw materials.
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
       </Card.Body>
     </Card>
     </Col>
     <Col sm={ 4 }>
     <Card style={{ width: '18rem'}}>
       <Card.Img variant="top" src={metal} />
       <Card.Body>
         <Card.Title>Recycle Metal</Card.Title>
         <Card.Text>
         steel recycling efforts save 75 percent of the overall energy used in production from
          raw materials. This has huge benefits in the fight to save natural resources, and prevent 
          excess greenhouse gas emissions 
         </Card.Text>
        <Button variant="info"> <Link to="/history">DONE</Link></Button>
   
       </Card.Body>
     </Card>
         </Col>

     </Row>
     </Container>

      );
    }



  

    