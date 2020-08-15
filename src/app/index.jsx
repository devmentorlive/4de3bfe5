import React, { useState } from "react";
import "./styles.css";
import schedule from "../data/schedule.json";
import DayNames from "./day-names";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  function getSlots(block) {
    const slots = [];
    for (let i = block.from; i < block.to; i++) slots.push(i);

    return slots;
  }

  const blocks = schedule[selectedDay];

  return (
    <div className="wrapper">
      <h1>Available times</h1>
      <DayNames
        schedule={schedule}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <ul className="slots">
        {blocks &&
          blocks.map((block) =>
            getSlots(block).map((slot) => (
              <li
                className={`pill ${selectedSlot === slot ? "selected" : ""}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </li>
            ))
          )}
      </ul>
    </div>
  );
}
