import React from "react";

export default function SlotTimes({
  schedule,
  selectedDay,
  selectedSlot,
  setSelectedSlot,
  get12Hour,
}) {
  function getSlots(block) {
    const slots = [];
    for (let i = block.from; i < block.to; i++) slots.push(i);

    return slots;
  }

  const blocks = schedule[selectedDay];
  return (
    <ul className="slots">
      {blocks &&
        blocks.map((block) =>
          getSlots(block).map((slot) => (
            <li
              className={`pill ${selectedSlot === slot ? "selected" : ""}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {get12Hour(slot)}
            </li>
          ))
        )}
    </ul>
  );
}
