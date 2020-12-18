import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
const EditTicketButton = ({
  id,
  oldTitle,
  oldAuthor,
  oldStatus,
  oldTrainer,
  oldUrgency,
  oldCohort,
  oldDesc,
  oldTopic,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cohort, setcohort] = useState(oldCohort);
  const [trainer, settrainer] = useState(oldTrainer);
  const [title, settitle] = useState(oldTitle);
  const [status, setStatus] = useState(oldStatus);
  const [issue, setissue] = useState(oldDesc);
  const [topic, settopic] = useState(oldTopic);
  const [urgency, seturgency] = useState(oldUrgency);
  const [timestamp, settimestamp] = useState(
    new Date().toLocaleString("en-GB")
  );

  const ticketData = {
    title: title,
    topic: topic,
    content: issue,
    status: status,
    trainer: trainer,
    priority: urgency,
    cohort: cohort,
    timestamp: timestamp,
    author: oldAuthor,
  };

  const updateData = (e) => {
    settimestamp(new Date().toLocaleString("en-GB"));
    axios
      .put("http://backend:8081/updateTicket/" + id, ticketData, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(ticketData);
        console.log(error);
      });
    handleClose();
  };

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <PencilFill />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="ticketModal"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Ticket Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Trainer for Ticket</Form.Label>
              <Form.Control
                type="text"
                defaultValue={oldTrainer}
                placeholder="Trainer Name"
                onChange={(e) => {
                  settrainer(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                defaultValue={oldStatus}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option>Unresolved</option>
                <option>Pending</option>
                <option>Resolved</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Cohort</Form.Label>
              <Form.Control
                as="select"
                defaultValue={oldCohort}
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
                placeholder="Issue Summary"
                defaultValue={oldTitle}
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
                defaultValue={oldDesc}
                onChange={(e) => {
                  setissue(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Topic</Form.Label>
              <Form.Control
                as="select"
                defaultValue={oldTopic}
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
                defaultValue={oldUrgency}
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
            onClick={(e) => updateData(e)}
            variant="primary"
            size="lg"
            block
            className="mb-4"
          >
            Update Ticket
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default EditTicketButton;
