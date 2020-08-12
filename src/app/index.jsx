import React, { useState } from "react";
import DayNames from "./day-names";
import Slots from "./slots";
import days from "../data/days.json";

import "./styles.css";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="wrapper">
      <h1>Available times {selectedDay ? `for ${selectedDay}` : null}</h1>
      <DayNames
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setSelectedSlot={setSelectedSlot}
      />
      <hr />
      <Slots
        days={days}
        selectedDay={selectedDay}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
      {selectedSlot ? (
        <div className="book-now">
          <hr />
          <p>
            You have requested the <strong>{selectedSlot}</strong> slot on{" "}
            <strong>{selectedDay}</strong>.
          </p>
          <button>Book this appointment now</button>
        </div>
      ) : null}
    </div>
  );
}
