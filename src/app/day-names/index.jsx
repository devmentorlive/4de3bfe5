import React from "react";

export default function DayNames({
  schedule,
  selectedDay,
  setSelectedDay,
  setSelectedSlot,
}) {
  return (
    <div className="day-names">
      <ul className="horizontal">
        {Object.keys(schedule).map((day) => (
          <li
            key={day}
            onClick={() => {
              setSelectedDay(day);
              setSelectedSlot(null);
            }}
            className={`pill ${selectedDay === day ? "selected" : ""}`}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
}
