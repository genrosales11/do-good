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
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import recycle from "../images/recycle.png";
import trash from "../images/trash.png";
import transportation from "../images/transportaion.png";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const Categories = () => {

  return (
    <Carousel style={{ width: '80%'}} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={recycle}
          alt="First slide"
        />
        <Button variant="info"> <Link to="/recycle">Go to Recycle</Link></Button>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60"
          src={trash}
          alt="Second slide"
        />
         <Button variant="info"> <Link to="/trash">Go to Recycle</Link></Button>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60"
          src={transportation}
          alt="Third slide"
        />
       <Button variant="info"> <Link to="/transportation">Transportaion</Link></Button>
      </Carousel.Item>
    </Carousel>
  );
}

export default Categories;