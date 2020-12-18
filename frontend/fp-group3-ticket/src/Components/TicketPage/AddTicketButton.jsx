import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
const AddTicketButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setfirstName] = useState(``);
  const [secondName, setsecondName] = useState(``);
  const [cohort, setcohort] = useState(`CloudNative`);
  const [title, settitle] = useState(``);
  const [issue, setissue] = useState(``);
  const [topic, settopic] = useState(`Networking`);
  const [urgency, seturgency] = useState(`Low`);
  const [timestamp, settimestamp] = useState(
    new Date().toLocaleString("en-GB")
  );

  const ticketData = {
    title: title,
    topic: topic,
    content: issue,
    timestamp: timestamp,
    status: "Unresolved",
    author: firstName + " " + secondName,
    trainer: "none",
    priority: urgency,
    cohort: cohort,
  };

  const postData = (e) => {
    const newDate = new Date().toLocaleString("en-GB");
    settimestamp(newDate);
    axios
      .post("http://backend:8081/createTicket", ticketData, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        className="ml-3 qaColButton"
        onClick={handleShow}
      >
        <PlusCircleFill /> New Ticket
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="ticketModal"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Ticket Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Second Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Second Name"
                onChange={(e) => {
                  setsecondName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cohort</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  setcohort(e.target.value);
                }}
              >
                <option>CloudNative</option>
                <option>Software Specialist</option>
                <option>DevOps</option>
                <option>BigData</option>
                <option>Barclays</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Title summary of the issue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Issue Sumamary"
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setissue(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Topic</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  settopic(e.target.value);
                }}
              >
                <option>Networking</option>
                <option>Privacy</option>
                <option>Software</option>
                <option>Hardware</option>
                <option>Keys</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Urgency</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  seturgency(e.target.value);
                }}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <Button
            onClick={(e) => postData(e)}
            variant="primary"
            size="lg"
            block
            className="mb-4"
          >
            Create Ticket
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddTicketButton;
