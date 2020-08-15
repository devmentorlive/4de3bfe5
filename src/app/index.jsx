import React, { useState } from "react";
import "./styles.css";
import schedule from "../data/schedule.json";
import DayNames from "./day-names";
import SlotTimes from "./slot-times";

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  function get12Hour(hour) {
    const slot = hour > 12 ? hour - 12 : hour;
    return slot ? `${slot}pm` : `${slot}am`;
  }

  return (
    <div className="wrapper">
      <h1>Available times {selectedDay ? `for ${selectedDay}` : null}</h1>
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
        get12Hour={get12Hour}
      />

      {selectedSlot ? (
        <div className="book-now">
          <p>
            You have requested the <strong>{get12Hour(selectedSlot)}</strong>{" "}
            slot on <strong>{selectedDay}</strong>.
          </p>
          <button>Book this appointment now</button>
        </div>
      ) : null}
    </div>
  );
}
