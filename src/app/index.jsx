import React, { useState } from "react";
import days from "../data/days.json";

import "./styles.css";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="wrapper">
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
    </div>
  );
}
