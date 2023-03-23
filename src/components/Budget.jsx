import { useState } from "react";
import { Card, Button, ProgressBar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Budget = (props) => {
  const [currentBudget, setCurrentBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(props.maxBudget);
  const [outOfBudget, setOutofBudget] = useState(false);

  return (
    <div>
      <Card style={{ width: "30rem" }} className="m-3">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ${currentBudget}/${maxBudget}
          </Card.Subtitle>
          <Card.Text>
            <ProgressBar
              now={currentBudget}
              max={maxBudget}
              variant={outOfBudget ? "danger" : "primary"}
            />
          </Card.Text>
          <Card.Link
            className="btn btn-primary"
            onClick={() => {
              setCurrentBudget((x) => x + 200);
              if (val > 500) {
                setOutofBudget(true);
              } else {
                setOutofBudget(false);
              }
            }}
          >
            Add expense
          </Card.Link>
          <Card.Link className="btn btn-secondary">View expenses</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Budget;
