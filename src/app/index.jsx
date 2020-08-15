import React, { useState } from "react";
import "./styles.css";
import schedule from "../data/schedule.json";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="wrapper">
      <h1>Available times</h1>
      <div className="day-names">
        <ul className="horizontal">
          {Object.keys(schedule).map((day) => (
            <li
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`pill ${selectedDay === day ? "selected" : ""}`}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
