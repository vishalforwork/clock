import React, { useEffect, useState } from "react";

import "./clock.css";

const Clock = () => {
  const [time, seTime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let hours = date.getHours() % 12 || 12;

      hours = String(hours).padStart(2, "0");

      let period = hours >= 12 ? "AM" : "PM";

      let minutes = String(date.getMinutes()).padStart(2, "0");

      let seconds = String(date.getSeconds()).padStart(2, "0");

      seTime(`${hours}:${minutes}:${seconds} ${period}`);
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        <div className="clock">
          <div className="display">{time}</div>
        </div>
      </div>
    </>
  );
};

export default Clock;
