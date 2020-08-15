import React, { useState } from "react";
import "./styles.css";
import schedule from "../data/schedule.json";
import DayNames from "./day-names";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="wrapper">
      <h1>Available times</h1>
      <DayNames
        schedule={schedule}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </div>
  );
}
