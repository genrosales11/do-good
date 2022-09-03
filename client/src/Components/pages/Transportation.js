
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { FaRecycle  } from "react-icons/fa";
import Button from 'react-bootstrap/esm/Button';

function DefaultExample() {
  return (
    <Container style={{ alignItems: 'center' }}>
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="md-2 me-auto">
          <div className="fw-bold">Clean containers out before recycling.</div>
          
        </div>
        <Button active={true} icon={<FaRecycle/>}> DONE </Button>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Don't "recycle" or throw out food</div>
          
        </div>
        <Button active={true} icon={<FaRecycle/>}> DONE </Button>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Let everything dry before recycling it</div>
          
        </div>
        <Button active={true} icon={<FaRecycle/>}> DONE </Button>
      </ListGroup.Item>
    </ListGroup>
    </Container>
  );
}

export default DefaultExample;