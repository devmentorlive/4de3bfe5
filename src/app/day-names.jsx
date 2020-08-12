import React from "react";

export default function DayNames({ days, selectedDay, setSelectedDay }) {
  return (
    <ul className="days">
      {Object.keys(days).map((name) => (
        <li
          onClick={() => setSelectedDay(name)}
          className={selectedDay === name ? "selected" : ""}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
