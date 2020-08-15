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
            onKeyPress={() => {
              setSelectedDay(day);
              setSelectedSlot(null);
            }}
            tabIndex={0}
            className={`pill ${selectedDay === day ? "selected" : ""}`}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
}
