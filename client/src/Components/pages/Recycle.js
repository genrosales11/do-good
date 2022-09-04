
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


// import React from 'react';
// import 'bulma/css/bulma.min.css';


// import { Form } from 'react-bulma-components';

// const { Box, Block, Notification, } = Form;

// export default function Recycle () {
//     return (
// <>
//     <Box>
//     <React.Fragment key=".0">
//       <Block>
//         <Notification color="info">
//           Some text
//         </Notification>
//       </Block>
//       <Block>
//         <Notification color="success">
//           Some more text
//         </Notification>
//       </Block>
//       <Block>
//         <Notification color="danger">
//           All of this are evently spaced
//         </Notification>
//       </Block>
//       <Block>
//         <Notification color="warning">
//           This one does not generate extra margin at the bottom
//         </Notification>
//       </Block>
//     </React.Fragment>
//   </Box>
//   </>
// );
//     }

import Carousel from 'react-bootstrap/Carousel';

const Recycle = () => {

  return (
    <Carousel style={{ width: '50rem '}} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/recycle.png"
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

export default Recycle;
  

    