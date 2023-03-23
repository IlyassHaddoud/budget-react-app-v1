import { Card, Button, ProgressBar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState(0);
  const [max, setMax] = useState(1250);
  const [out, setOut] = useState(false);

  const [vale, setVale] = useState(0);
  const [maxe, setMaxe] = useState(2400);
  const [oute, setOute] = useState(false);
  return (
    <Container className="app">
      <div className="header d-flex justify-content-between p-3">
        <div className="logo">
          <h1>Budgets</h1>
        </div>
        <div className="btns">
          <Button className="mx-2">Add budget</Button>
          <Button variant="outline-primary">Add expense</Button>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <Card className="w-50">
          <Card.Body>
            <Card.Title>Gaming</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ${val}/${max}
            </Card.Subtitle>
            <Card.Text>
              <ProgressBar
                now={val}
                max={max}
                variant={out ? "danger" : "primary"}
              />
            </Card.Text>
            <Card.Link
              className="btn btn-primary"
              onClick={() => {
                setVal((x) => x + 200);
                if (val > 500) {
                  setOut(true);
                } else {
                  setOut(false);
                }
              }}
            >
              Add expense
            </Card.Link>
            <Card.Link className="btn btn-secondary">View expenses</Card.Link>
          </Card.Body>
        </Card>
        <Card className="w-50">
          <Card.Body>
            <Card.Title>Eating</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ${vale}/${maxe}
            </Card.Subtitle>
            <Card.Text>
              <ProgressBar
                now={vale}
                max={maxe}
                variant={oute ? "danger" : "primary"}
              />
            </Card.Text>
            <Card.Link
              className="btn btn-primary"
              onClick={() => {
                setVale((x) => x + 200);
                if (vale > 500) {
                  setOute(true);
                } else {
                  setOute(false);
                }
              }}
            >
              Add expense
            </Card.Link>
            <Card.Link className="btn btn-secondary">View expenses</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default App;
