import React from "react";

export default function DayNames({
  days,
  selectedDay,
  setSelectedDay,
  setSelectedSlot,
}) {
  return (
    <div className="day-names">
      <ul className="horizontal">
        {Object.keys(days).map((name) => (
          <li
            onClick={() => {
              setSelectedDay(name);
              setSelectedSlot(null);
            }}
            className={`pill ${selectedDay === name ? "selected" : ""}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
