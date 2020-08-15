import React from "react";
import Range from "./range";

export default function Slots({
  schedule,
  selectedDay,
  selectedSlot,
  setSelectedSlot,
}) {
  return selectedDay ? (
    <div className="slots">
      <ul className="slots">
        <Range
          schedule={schedule}
          selectedDay={selectedDay}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      </ul>
    </div>
  ) : (
    <></>
  );
}
