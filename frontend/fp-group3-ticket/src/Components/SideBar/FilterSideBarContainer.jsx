import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SideFilterTopic from "./SideFilterTopic";
import SideFilterPriority from "./SideFilterPriority";
import SideFilterStatus from "./SideFilterStatus";
import SideFilterCohort from "./SideFilterCohort";
import SideHeader from "./SideHeader";
const FilterSideBarContainer = ({ dataSortSetup }) => {
  return (
    <div className="sidebarContainer mb-3">
      <Accordion>
        <Card className="sideBarContainer">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="p-0 sideBarContainer"
          >
            <SideHeader title="Filter" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="p-0">
              <SideFilterPriority dataSortSetup={dataSortSetup} />
              <SideFilterStatus dataSortSetup={dataSortSetup} />
              <SideFilterTopic dataSortSetup={dataSortSetup} />
              <SideFilterCohort dataSortSetup={dataSortSetup} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
export default FilterSideBarContainer;
