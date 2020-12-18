import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SideSubHeader from "./SideSubHeader";
const SortSideBar = ({ dataSortSetup }) => {
  const sortList = [
    {
      text: "Networking",
      request: "/topic/Networking",
    },
    {
      text: "Security",
      request: "/topic/Security",
    },
    {
      text: "Privacy",
      request: "/topic/Privacy",
    },
    {
      text: "Hardware",
      request: "/topic/Hardware",
    },
    {
      text: "Other",
      request: "/topic/Other",
    },
  ];

  return (
    <Accordion>
      <Card className="sideBarContainer">
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-0 sideBarContainer"
        >
          <SideSubHeader title="Topic" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">
            {sortList.map((field) => (
              <>
                <div
                  className="sidebarInnerContainer sideBody"
                  onClick={() => dataSortSetup(field.request)}
                >
                  <p className="sidebarChildText">{field.text}</p>
                </div>
              </>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default SortSideBar;
