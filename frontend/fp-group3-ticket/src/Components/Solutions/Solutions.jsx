import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../SideBar/Sidebar";
import SolutionsStaticBody from "./SolutionsStaticBody";
const Solutions = () => {
  return (
    <>
      <Container fluid={true}>
        <Row className="noMargin">
          <Col xs={2} className="mt-3 pt-3 pl-0">
            <Sidebar />
          </Col>
          <Col xs={10} className="pt-3 mt-3 pr-0">
            <SolutionsStaticBody />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Solutions;
