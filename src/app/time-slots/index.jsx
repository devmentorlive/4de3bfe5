import React from "react";

function getSlots(block) {
  const slots = [];
  for (let i = block.from; i < block.to; i++) {
    slots.push(`${get12h(i)} - ${get12h(i + 1)}`);
  }

  return slots;
}

function get12h(hour) {
  return hour < 13 ? `${hour}am` : `${hour - 12}pm`;
}

export default function Slots({
  schedule,
  selectedDay,
  selectedSlot,
  setSelectedSlot,
}) {
  const blocks = schedule[selectedDay];
  return selectedDay ? (
    <ul className="slots">
      {blocks && blocks.length > 0
        ? blocks.map((block) =>
            getSlots(block).map((range) => (
              <li
                key={range}
                onClick={() => setSelectedSlot(range)}
                onKeyPress={() => setSelectedSlot(range)}
                className={`pill ${selectedSlot === range ? "selected" : null}`}
                tabIndex={0}
              >
                {range}
              </li>
            ))
          )
        : "There are no slots available that day"}
    </ul>
  ) : (
    <></>
  );
}
