import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import beach from "../images/beach.png";
import parks from "../images/parks.png";
import awareness from "../images/awareness.png";
import { Link } from 'react-router-dom'


export default function Category() {
    return (
 <Container>
      <Row>
      
   {/* ---------------------- category cards ------- */}
   <Col sm={ 4}>
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={beach}/>
       <Card.Body>
       <Card.Title>Clean up local beach</Card.Title>
         <Card.Text>
         Over the past few years, the world has woken up to horrifying headlines about
          sea life that has unfortunately died due to consuming or being trapped by the waste we throw in the oceans.
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
       </Card.Body>
     </Card>
     </Col>
  <Col sm={ 4 }>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={parks} />
       <Card.Body>
       <Card.Title>Clean up local parks</Card.Title>
         <Card.Text>
         A park that is clean and well-maintained offers a safe and enjoyable place for people to visit for hiking,
          picnicking, sporting activities, or just relaxing on an outdoor bench.
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
       </Card.Body>
     </Card>
     </Col>
     <Col sm={ 4 }>
     <Card style={{ width: '18rem'}}>
       <Card.Img variant="top" src={awareness} />
       <Card.Body>
         <Card.Title>Creating awareness</Card.Title>
         <Card.Text>
         the act of cleaning is very important, but so are the indirect consequences of the act itself. Being aware 
         that the world is actually dirtier than we thought and that we are the problem, is a big step towards a more
          sustainable and environmentally friendly life
         </Card.Text>
         <Button variant="info"> <Link to="/history">DONE</Link></Button>
   
       </Card.Body>
     </Card>
         </Col>

     </Row>
     </Container>

      );
    }

