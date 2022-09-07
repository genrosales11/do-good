// import React from "react";
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import recycle from "../images/recycle.png";
// import trash from "../images/trash.png";
// import transportation from "../images/transportaion.png";

// export default function Category() {
//     return (
//  <Container>
//       <Row>
      
//    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
//   <Col sm={ 4}>
//    <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={recycle}  />
//       <Card.Body>
//       <Card.Title>Recycle</Card.Title>
//         <Card.Text>
//         Reducing, reusing, and recycling cuts down on the amount of raw material 
//         needed to create new products, lessening the overall impact on natural resources.
//         </Card.Text>
//         <Button variant="info"> <Link to="/recycle">Go to Recycle</Link></Button>
//       </Card.Body>
//     </Card>
//     </Col>
//    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
     
//  <Col sm={ 4 }>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={trash}  />
//       <Card.Body>
//       <Card.Title>Pick up trash</Card.Title>
//         <Card.Text>
//         Every piece of litter intercepted from the beach is one less piece of litter that doesn't end up in the ocean
//         </Card.Text>
//         <Button variant="info"> <Link to="/trash">Go to Recycle</Link></Button>
//       </Card.Body>
//     </Card>
//     </Col>
//  {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
  
//     <Col sm={ 4 }>
//     <Card style={{ width: '18rem'}}>
//       <Card.Img variant="top" src={transportation} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//         Cycling improves cardio-vascular and aerobic fitness, lowers blood pressure, 
//         boosts energy, builds muscle, and improves coordination. 
//         </Card.Text>
//        <Button variant="info"> <Link to="/transportation">Transportaion</Link></Button>
   
//       </Card.Body>
//     </Card>
//         </Col>

//     </Row>
//     </Container>

//      );
//    }
// import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import recycle from "../images/recycle.png";
// import trash from "../images/trash.png";
// import transportation from "../images/transportation.png";
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom'

// const Categories = () => {

//   return (
//     <Carousel style={{ width: '80%'}} variant="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-55"
//           src={recycle} style={{height: '30%'}}
//           alt="First slide"
//         />
//         <Button variant="info"> <Link to="/recycle">Go to Recycle</Link></Button>
       
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-60"
//           src={trash}style={{height: '60%'}}
//           alt="Second slide"
//         />
//          <Button variant="info"> <Link to="/trash">Go to Trash</Link></Button>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-30"
//           src={transportation} style={{height: '60%'}}
//           alt="Third slide"
//         />
//        <Button variant="info"> <Link to="/transportation">Reduce Your Carbon Footprint</Link></Button>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Categories;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import recycle from "../images/recycle.png";
import trash from "../images/trash.png";
import transportation from "../images/cycle.png";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

  
export default function App() {
  return (
    <div style={{ display: 'block', width: 1300, padding: 30, backgroundColor: 'black'}}>
      <h4 style={{ color: 'white' }}>Categories</h4>
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-60" src={recycle} style={{ height: 505 }}
            alt="recycle"
          />
          {/* <Button variant="info"> <Link to="/recycle">Go to Recycle</Link></Button> */}
          <Carousel.Caption>
            <h3>Recycle</h3>
            <p> Reducing, reusing, and recycling cuts down on the amount of raw material 
         needed to create new products, lessening the overall impact on natural resources.</p>
         <Button variant="info"> <Link to="/recycle">Go to Recycle</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60" src={trash} style={{ height: 555 }}
            alt="trash"/>
          {/* <Button variant="info"> <Link to="/trash">Pick up trash</Link></Button> */}
          <Carousel.Caption>
            <h3>Pick up trash</h3>
            <p>Every piece of litter intercepted from the beach is one less piece of
               litter that doesn't end up in the ocean</p>
               <Button variant="info"> <Link to="/trash">Pick up trash</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-60" src={transportation} style={{ height: 505 }}
            alt="trash"/>
          {/* <Button variant="info"> <Link to="/transportation">Reduce Your Carbon Footprint</Link></Button> */}
          <Carousel.Caption>
            <h3>Reduce Your Carbon Footprint</h3>
            <p> Cycling improves cardio-vascular and aerobic fitness, lowers blood pressure, 
        boosts energy, builds muscle, and improves coordination. </p>
        <Button variant="info"> <Link to="/transportation">Reduce Your Carbon Footprint</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}