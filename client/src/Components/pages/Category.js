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

const Categories = () => {

  return (
    <Carousel style={{ width: '100% '}} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={recycle}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Categories;