import React from "react";

const Statistic = ({ name, value }) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
);

export const Statistics = ({ stats }) => {
  const hasStatistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return false;
    }

    return true;
  };
  return (
    <div>
      <h2>statistics</h2>
      {hasStatistics(stats) ? (
        <table>
          <tbody>
            <Statistic name="good" value={stats.good} />
            <Statistic name="neutral" value={stats.neutral} />
            <Statistic name="bad" value={stats.bad} />
            <Statistic name="all" value={stats.sum} />
            <Statistic name="average" value={stats.avg} />
            <Statistic name="positive" value={stats.positive} />
          </tbody>
        </table>
      ) : (
        <p>no feedback given</p>
      )}
    </div>
  );
};
