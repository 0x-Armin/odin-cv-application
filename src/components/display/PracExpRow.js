import React from "react";
import "../../styles/style.css";

const PracExpRow = (
  id,
  companyName,
  positionTitle,
  dateFrom,
  dateTo,
  mainTasks
) => {
  return (
    <div id={id} className="prac-exp-details">
      <div className="prac-exp-details-header">
        <div className="prac-exp-details-header-left">
          <div className="entry-name">{companyName}</div>
          <div className="title">{positionTitle}</div>
        </div>
        <div className="date-section">
          {dateFrom} to {dateTo}
        </div>
      </div>

      <div className="main-tasks">{mainTasks}</div>
    </div>
  );
};

export default PracExpRow;
