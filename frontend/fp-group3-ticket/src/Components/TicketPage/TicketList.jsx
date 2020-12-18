import React from "react";
import { Accordion } from "react-bootstrap";
import Ticket from "./Ticket";
const TicketList = ({ data, error, isLoaded }) => {
  if (!isLoaded) {
    return <p> Please wait.... we are loading your information</p>;
  } else {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {data.map((ticket) => (
            <Ticket
              key={ticket.id}
              obj={ticket}
              id={ticket.id}
              acc_id={ticket.id}
              title={ticket.title}
              topic={ticket.topic}
              desc={ticket.content}
              time={ticket.time}
              status={ticket.status}
              trainee={ticket.author}
              trainer={ticket.trainer}
              priority={ticket.priority}
              cohort={ticket.cohort}
            />
          ))}
        </Accordion>
      </>
    );
  }
};
export default TicketList;
