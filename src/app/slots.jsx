import React from "react";

export default function Slots({ days, selectedDay }) {
  const blocks = days[selectedDay];

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
