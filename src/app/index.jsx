import React, { useState } from "react";
import DayNames from "./day-names";
import days from "../data/days.json";

import "./styles.css";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="wrapper">
      <DayNames
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      {selectedDay ? (
        <ul className="hours">{JSON.stringify(days[selectedDay])}</ul>
      ) : null}
    </div>
  );
}
