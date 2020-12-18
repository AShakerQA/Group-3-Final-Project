import axios from "axios";
import React from "react";
import Avatar from "react-avatar";
import { Col, Row, Button, Card, Accordion } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import EditTicketButton from "./EditTicketButton";
const Ticket = ({
  id,
  acc_id,
  title,
  topic,
  desc,
  time,
  status,
  trainee,
  trainer,
  priority,
  cohort,
}) => {
  const deleteTicket = (e) => {
    console.log("delete data");
    axios.delete("http://backend:8081/deleteTicket/" + id, {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Card className="ticket">
      <Card.Header>
        <Row>
          <Accordion.Toggle as={Col} eventKey={acc_id} xs={4}>
            <p className="mutedText">Title:</p>
            <h5 id="tickTitle" className="ticketText">
              {title}
            </h5>
          </Accordion.Toggle>
          <Col xs={2}>
            <div id="tickTopic" className="textContainer blue my-1">
              {topic}
            </div>
          </Col>
          <Col xs={2}>
            <p className="mutedText">Cohort:</p>
            <h6 id="tickCohort" className="ticketText">
              {cohort}
            </h6>
          </Col>
          <Col xs={4} className="icons my-1">
            <EditTicketButton
              id={id}
              oldTitle={title}
              oldAuthor={trainee}
              oldStatus={status}
              oldTrainer={trainer}
              oldUrgency={priority}
              oldCohort={cohort}
              oldDesc={desc}
              oldTopic={topic}
            />
            <Button variant="link" onClick={(e) => deleteTicket(e)}>
              <Icon.TrashFill />
            </Button>
            <div className={"textContainer " + status}>{status}</div>
          </Col>
        </Row>
      </Card.Header>
      <Accordion.Collapse eventKey={acc_id}>
        <Card.Body>
          <Row>
            <Col xs={8}> {desc}</Col>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
      <Card.Footer>
        <Row>
          <Col xs={4}>
            <div className="priorityBar">
              <div className={priority}>
                <p id="tickPriority" className="priorityText">
                  {priority}
                </p>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <Row>
              <Col xs={2}>
                <Avatar
                  name={trainee}
                  round={true}
                  size={40}
                  textSizeRatio={2.7}
                />
              </Col>
              <Col>
                <p className="mutedText">Author:</p>
                <h6 id="tickTrainee" className="ticketText">
                  {trainee}
                </h6>
              </Col>
            </Row>
          </Col>

          <Col xs={3}>
            <Row>
              <Col xs={2}>
                <Avatar
                  name={trainer}
                  round={true}
                  size={40}
                  textSizeRatio={2.7}
                />
              </Col>
              <Col>
                <p className="mutedText">Trainer:</p>
                <h6 id="tickTrainer" className="ticketText">
                  {trainer}
                </h6>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <p className="mutedText">Timestamp:</p>
            <h6 id="tickTime" className="ticketText">
              {time}
            </h6>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default Ticket;
