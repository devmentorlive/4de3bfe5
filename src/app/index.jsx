import React, { useState } from "react";
import DayNames from "./day-names";
import Slots from "./slots";
import days from "../data/days.json";

import "./styles.css";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="wrapper">
      <h1>Available times {selectedDay ? `for ${selectedDay}` : null}</h1>
      <DayNames
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <hr />
      <Slots days={days} selectedDay={selectedDay} />
    </div>
  );
}
