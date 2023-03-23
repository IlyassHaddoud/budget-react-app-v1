import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddBudget = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" ref={props.name} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" ref={props.maximumSpending} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Budget</Form.Label>
              <Form.Control type="number" ref={props.maximumSpending} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBudget;
