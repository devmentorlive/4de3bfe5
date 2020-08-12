import React from "react";

export default function DayNames({ days, selectedDay, setSelectedDay }) {
  return (
    <div className="day-names">
      <ul className="horizontal">
        {Object.keys(days).map((name) => (
          <li
            onClick={() => setSelectedDay(name)}
            className={`pill ${selectedDay === name ? "selected" : ""}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
