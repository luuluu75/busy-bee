import React from "react";
import dateFns from "date-fns";
import Calendar from "../../../../models/Calendar"

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
      </div>
    );
  }
}

export default Calendar;
