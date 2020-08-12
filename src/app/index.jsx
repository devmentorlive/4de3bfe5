import React, { useState } from "react";
import DayNames from "./day-names";
import Slots from "./slots";
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

      <Slots days={days} selectedDay={selectedDay} />
    </div>
  );
}
