import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import AddBudget from "./components/AddBudget";
import { useState, useRef } from "react";

const App = () => {
  const name = useRef();
  const maximumSpending = useRef();
  const [show, setShow] = useState(false);
  const [budgets, setBudgets] = useState([
    { id: 1, name: "gaming", maxBudget: 3500 },
    { id: 2, name: "eating", maxBudget: 1500 },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBudget = {
      name: name.current.value,
      maxBudget: maximumSpending.current.value,
    };
    setBudgets((x) => [...budgets, newBudget]);
    setShow((x) => false);
  };

  return (
    <Container className="app">
      <div className="d-flex justify-content-between p-3">
        <div className="logo">
          <h1>Budgets</h1>
        </div>
        <div className="btns">
          <Button className="mx-2" onClick={handleShow}>
            Add budget
          </Button>
          <Button variant="outline-primary">Add expense</Button>
        </div>
      </div>
      <div className="budgets">
        {budgets.map((budget) => {
          return (
            <Budget
              key={budget.id}
              name={budget.name}
              maxBudget={budget.maxBudget}
            />
          );
        })}
      </div>
      <AddBudget
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        name={name}
        maximumSpending={maximumSpending}
      />

      <AddBudget
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        name={name}
        maximumSpending={maximumSpending}
      />
    </Container>
  );
};

export default App;
