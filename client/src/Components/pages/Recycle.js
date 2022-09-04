
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
// import { FaRecycle  } from "react-icons/fa";
// import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import "../Header/Recycle.css"

function DefaultExample() {
  return (
    <Container style={{ }}>
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="md-3 me-auto">
          <div className="fw-bold">Clean containers out before recycling.</div>
          
        </div>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Don't "recycle" or throw out food</div>
          
        </div>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Let everything dry before recycling it</div>
          
        </div>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        {/* <Button active={true} icon={<FaRecycle/>}> DONE </Button> */}
      </ListGroup.Item>
    </ListGroup>
    </Container>
  );
}

export default DefaultExample;