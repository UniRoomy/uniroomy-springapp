import React from "react";

interface Props {}

export default function bookingHistory({}: Props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>History of your bookings</h3>
      <h4>Tasks:</h4>
      <ul style={{ textAlign: "start" }}>
        <li>
          Use the bookings state or if state not persisting {"->"} make a
          example bookings array to use for testing
        </li>
        <li>
          Can iterate through the bookings array and display them (as cards),
          whilst distinguishing against completed and non-completed cleans
          (using the `completed` param).
        </li>
      </ul>
    </div>
  );
}
