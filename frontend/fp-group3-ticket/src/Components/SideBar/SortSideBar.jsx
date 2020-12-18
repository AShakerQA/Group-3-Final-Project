import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SideHeader from "./SideHeader";
const SortSideBar = ({ dataSortSetup }) => {
  const sortList = [
    {
      text: "Title",
      request: "/sort/title",
    },
    {
      text: "Topic",
      request: "/sort/topic",
    },
    {
      text: "Cohort",
      request: "/sort/cohort",
    },
    {
      text: "Author",
      request: "/sort/author",
    },
    {
      text: "Trainer",
      request: "/sort/trainer",
    },
  ];

  return (
    <div className="sidebarContainer mb-3">
      <Accordion>
        <Card className="sideBarContainer">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="p-0 sideBarContainer"
          >
            <SideHeader title="Sort" />
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
    </div>
  );
};
export default SortSideBar;
