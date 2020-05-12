import React, { Fragment } from "react";
import { Part } from "./Part";

export const Content = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const total = exercises.reduce((acc, current) => acc + current, 0);
  return (
    <Fragment>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <strong>total of {total}</strong>
    </Fragment>
  );
};
