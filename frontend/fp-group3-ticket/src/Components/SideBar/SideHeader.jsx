import React from "react";
const SideHeader = ({ title }) => {
  return (
    <div className="sidebarInnerContainer">
      <h4 className="sidebarText">{title}</h4>
    </div>
  );
};
export default SideHeader;
