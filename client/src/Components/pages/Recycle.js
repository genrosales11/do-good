
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';
// // import { FaRecycle  } from "react-icons/fa";
// // import Button from 'react-bootstrap/esm/Button';
// import InputGroup from 'react-bootstrap/InputGroup';

// import "../Header/Recycle.css"

// function DefaultExample() {
//   return (
    
   

//     <Container >
//     <ListGroup as="ol" numbered>
//       <ListGroup.Item
//         as="li"
//         className="d-flex justify-content-between align-items-start"
//       >
//         <div className="md-3 me-auto">
//           <div className="fw-bold">Clean containers out before recycling.</div>
          
//         </div>
//         <InputGroup.Checkbox aria-label="Checkbox for following text input" />
//         {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
//       </ListGroup.Item>
//       <ListGroup.Item
//         as="li"
//         className="d-flex justify-content-between align-items-start"
//       >
//         <div className="ms-2 me-auto">
//           <div className="fw-bold">Don't "recycle" or throw out food</div>
          
//         </div>
//         <InputGroup.Checkbox aria-label="Checkbox for following text input" />
//         {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
//       </ListGroup.Item>
//       <ListGroup.Item
//         as="li"
//         className="d-flex justify-content-between align-items-start"
//       >
//         <div className="ms-2 me-auto">
//           <div className="fw-bold">Let everything dry before recycling it</div>
          
//         </div>
//         <InputGroup.Checkbox aria-label="Checkbox for following text input" />
//         {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
//       </ListGroup.Item>
//       <ListGroup.Item
//         as="li"
//         className="d-flex justify-content-between align-items-start"
//       >
//         <div className="ms-2 me-auto">
//           <div className="fw-bold">Let everything dry before recycling it</div>
          
//         </div>
//         <InputGroup.Checkbox aria-label="Checkbox for following text input" />
//         {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
//       </ListGroup.Item>
//       <ListGroup.Item
//         as="li"
//         className="d-flex justify-content-between align-items-start"
//       >
//         <div className="ms-2 me-auto">
//           <div className="fw-bold">Let everything dry before recycling it</div>
          
//         </div>
//         <InputGroup.Checkbox aria-label="Checkbox for following text input" />
//         {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
//       </ListGroup.Item>
//     </ListGroup>
//     </Container>
//   );
// }

// export default DefaultExample;

import React from "react";
 import Card from 'react-bootstrap/Card';
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import plastic from "../images/plastic.png";
import can from "../images/can.png";
import metal from "../images/metal.png"


export default function Category() {
    return (
 <Container>
      <Row>
      
    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
   <Col sm={ 4}>
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={plastic}/>
       <Card.Body>
       <Card.Title>Recycle Plastic</Card.Title>
         <Card.Text>
         Plastics recycling keeps still-useful materials out of landfills and encourages businesses
          to develop new and innovative products made from them.
         </Card.Text>
         <Button variant="info"> DONE </Button>
       </Card.Body>
     </Card>
     </Col>
    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
     
  <Col sm={ 4 }>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={can} />
       <Card.Body>
       <Card.Title>Aluminum Cans</Card.Title>
         <Card.Text>
         Recycling aluminum saves up to 95% of the energy wasted when manufacturing cans from new, raw materials.
         </Card.Text>
         <Button variant="info"> DONE</Button>
       </Card.Body>
     </Card>
     </Col>
  {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
  
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
        <Button variant="info"> DONE </Button>
   
       </Card.Body>
     </Card>
         </Col>

     </Row>
     </Container>

      );
    }



  

    