import React, { useState } from "react";
import DayNames from "./day-names";
import TimeSlots from "./time-slots";
import schedule from "../data/schedule.json";
import "./styles.css";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="wrapper">
      <h1>Available times {selectedDay ? `for ${selectedDay}` : null}</h1>
      <DayNames
        schedule={schedule}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setSelectedSlot={setSelectedSlot}
      />

      <TimeSlots
        schedule={schedule}
        selectedDay={selectedDay}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
      {selectedSlot ? (
        <div className="book-now">
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
