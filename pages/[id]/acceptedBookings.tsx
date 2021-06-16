import React from "react";

interface Props {}

export default function acceptedBookings({}: Props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Accepted Bookings</h3>
      <ul style={{ textAlign: "start" }}>
        <li>
          Show incoming bookings, including accepted ones (maybe distinguish
          between the two), with all the appropriate data
        </li>
        <li>Give an option to cleaner to either accept/reject the booking</li>
        <li>
          If booking accepted, give option to set booking as complete/incomplete
        </li>
      </ul>
    </div>
  );
}
