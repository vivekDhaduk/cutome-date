import { format } from "date-fns";
import React from "react";
import Calendar from './calendar/Calendar'

const App = () => {
  // select the date 
  const selectedData = new Date("2022-12-12")
console.log("selectedData",selectedData);

  return (
    <div className="mt-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <p>
          <strong>Selected Date: </strong>
          {format(selectedData, "dd/MM/yyyy")}
        </p>

      </div>

      <Calendar value={selectedData} />
    </div>
  );
};

export default App;
