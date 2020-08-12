import React from "react";

export default function Slots({ days, selectedDay }) {
  const blocks = days[selectedDay];

  function getSlots(block) {
    const slots = [];
    for (let i = block.from; i < block.to; i++) {
      slots.push(i);
    }

    return slots;
  }

  return (
    <div className="slots">
      {selectedDay ? (
        <ul className="horizontal">
          {blocks.map((block) =>
            getSlots(block).map((slot) => <li>{slot}</li>)
          )}
        </ul>
      ) : null}
    </div>
  );
}
