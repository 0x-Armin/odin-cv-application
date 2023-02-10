import React from "react";

const EdExpRow = (id, schoolName, titleOfStudy, dateFrom, dateTo) => {
  return (
    <div id={id} className="ed-exp-details">
      <div className="ed-exp-entry-left">
        <div className="entry-name">{schoolName}</div>
        <div className="title">{titleOfStudy}</div>
      </div>
      <div className="date-section">
        {dateFrom} to {dateTo}
      </div>
    </div>
  );
};

export default EdExpRow;
