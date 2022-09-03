import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function DefaultExample() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Clean containers out before recycling.</div>
          
        </div>
        <Badge bg="primary" pill>
          DONE
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Don't "recycle" or throw out food</div>
          
        </div>
        <Badge bg="primary" pill>
          DONE
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Let everything dry before recycling it</div>
          
        </div>
        <Badge bg="primary" pill>
         DONE
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default DefaultExample;