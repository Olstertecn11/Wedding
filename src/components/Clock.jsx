import React, { useState, useEffect } from "react";

const Clock = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-11-14T00:00:00"); // Fecha objetivo (día de la boda)
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div style={styles.container}>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.days || "0"}</span>
          <span style={styles.label}>días</span>
        </div>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.hours || "0"}</span>
          <span style={styles.label}>Hs</span>
        </div>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.minutes || "0"}</span>
          <span style={styles.label}>min</span>
        </div>
        <div style={styles.timeBlock}>
          <span style={styles.time}>{timeLeft.seconds || "0"}</span>
          <span style={styles.label}>se</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontFamily: "'Arial', sans-serif",
  },
  timeBlock: {
    textAlign: "center",
    fontWeight: "bold",
    display: "flex",
    flexDirection: 'column'
  },
  time: {
    fontSize: "1.2rem",
    color: "#a67a53",
  },
  label: {
    fontSize: "1rem",
    color: "#7a6450",
  },
};

export default Clock;
