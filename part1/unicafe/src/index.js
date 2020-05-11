import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Statistics } from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getPositiveFeedback = (positive, neutral, negative) => {
    if (positive === 0) {
      return "0%";
    }
    if (neutral + negative === 0) {
      return "100%";
    }

    return `${(good / (good + neutral + bad)) * 100} %`;
  };

  const getAverage = (positive, neutral, negative) => {
    return Number.parseFloat(
      (positive * 1 + neutral * 0 + negative * -1) /
        (positive + neutral + negative)
    ).toPrecision(1);
  };

  const stats = {
    good,
    neutral,
    bad,
    sum: good + neutral + bad,
    avg: getAverage(good, neutral, bad),
    positive: getPositiveFeedback(good, neutral, bad),
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics stats={stats} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
