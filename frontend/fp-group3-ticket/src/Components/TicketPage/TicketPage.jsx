import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import TicketList from "./TicketList";
import Sidebar from "../SideBar/Sidebar";

const TicketPage = () => {
  const [error, setError] = useState(`false`);
  const [isLoaded, setLoaded] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);
  const [dataSort, setDataSort] = useState(`/getTicket`);

  const dataSortSetup = (field) => {
    setDataSort("/getTicket" + field);
  };

  useEffect(() => {
    setIsUpdate(false);
    axios.get("http://backend:8081" + dataSort, 
    {
      headers: {
        'Access-Control-Allow-Origin' : '*'
        }
    }
)
      .then(
      (data) => {
        setLoaded(true);
        setError(false);
        setTicketData(data.data);
        console.log(ticketData);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );
  }, [dataSort]);

  return (
    <Container fluid={true}>
      <Row className="noMargin">
        <Col xs={2} className="mt-3 pt-3 pl-0" sticky="top">
          <Sidebar dataSortSetup={dataSortSetup} />
        </Col>
        <Col xs={10} className="pt-3 mt-3 pr-0">
          <TicketList data={ticketData} error={error} isLoaded={isLoaded} />
        </Col>
      </Row>
    </Container>
  );
};
export default TicketPage;
