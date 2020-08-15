import React, { useState } from "react";
import "./styles.css";
import schedule from "../data/schedule.json";
import DayNames from "./day-names";
import SlotTimes from "./slot-times";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="wrapper">
      <h1>Available times</h1>
      <DayNames
        schedule={schedule}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setSelectedSlot={setSelectedSlot}
      />

      <SlotTimes
        schedule={schedule}
        selectedDay={selectedDay}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
    </div>
  );
}
