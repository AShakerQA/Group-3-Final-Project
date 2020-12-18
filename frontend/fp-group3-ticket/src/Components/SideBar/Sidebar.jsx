import React from "react";
import FilterSideBarContainer from "./FilterSideBarContainer";
import SortSideBar from "./SortSideBar";
const Sidebar = ({ dataSortSetup }) => {
  return (
    <div className="parentSideContainer">
      <SortSideBar dataSortSetup={dataSortSetup} />
      <FilterSideBarContainer dataSortSetup={dataSortSetup} />
    </div>
  );
};
export default Sidebar;
