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

function Range({ days, selectedDay }) {
  const blocks = days[selectedDay];
  return blocks && blocks.length > 0
    ? blocks.map((block) =>
        getSlots(block).map((range) => <li className="pill">{range}</li>)
      )
    : "There are no slots available that day";
}

export default function Slots({ days, selectedDay }) {
  return (
    <div className="slots">
      {selectedDay ? (
        <ul className="slots">
          <Range days={days} selectedDay={selectedDay} />
        </ul>
      ) : null}
    </div>
  );
}
