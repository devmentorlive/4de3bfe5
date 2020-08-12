import React from "react";

function get12h(hour) {
  return hour < 13 ? `${hour}am` : `${hour - 12}pm`;
}

function getSlots(block) {
  const slots = [];
  for (let i = block.from; i < block.to; i++) {
    slots.push(`${get12h(i)} - ${get12h(i + 1)}`);
  }

  return slots;
}

function Range({ days, selectedDay, selectedSlot, setSelectedSlot }) {
  const blocks = days[selectedDay];
  return blocks && blocks.length > 0
    ? blocks.map((block) =>
        getSlots(block).map((range) => (
          <li
            onClick={() => setSelectedSlot(range)}
            onKeyPress={() => setSelectedSlot(range)}
            className={`pill ${selectedSlot === range ? "selected" : null}`}
            tabIndex={0}
          >
            {range}
          </li>
        ))
      )
    : "There are no slots available that day";
}

export default function Slots({
  days,
  selectedDay,
  selectedSlot,
  setSelectedSlot,
}) {
  return (
    <div className="slots">
      {selectedDay ? (
        <ul className="slots">
          <Range
            days={days}
            selectedDay={selectedDay}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </ul>
      ) : null}
    </div>
  );
}
