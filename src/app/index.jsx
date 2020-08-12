import React, { useState } from "react";
import DayNames from "./day-names";
import days from "../data/days.json";

import "./styles.css";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const blocks = days[selectedDay];

  function getSlots(block) {
    const slots = [];
    for (let i = block.from; i < block.to; i++) {
      slots.push(i);
    }

    return slots;
  }

  return (
    <div className="wrapper">
      <DayNames
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <div className="slots">
        {selectedDay ? (
          <ul className="horizontal">
            {blocks.map((block) =>
              getSlots(block).map((slot) => <li>{slot}</li>)
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
