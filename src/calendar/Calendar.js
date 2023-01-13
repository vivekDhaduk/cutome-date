import {
  differenceInDays,
  endOfMonth,
  startOfMonth,
} from "date-fns";
import React from "react";
import Cell from "./Cell";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


const Calendar = ({ value }) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();



  return (
    <div className="w-[400px] border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        {weeks.map((week) => (
          <Cell className="text-xs font-bold uppercase">{week}</Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isSelectedDate = date === value.getDate();

          return (
            <Cell
              key={date}
              isActive={isSelectedDate}
            >
              {date}
            </Cell>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
