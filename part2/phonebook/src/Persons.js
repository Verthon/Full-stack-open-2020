import React, { Fragment } from "react";

export const Persons = ({ persons, filterValue, deletePerson }) => {
  return (
    <Fragment>
      {persons
        .filter(
          (person) => person.name.toLowerCase().includes(filterValue) === true
        )
        .map((person) => (
          <div key={`d${person.name}`}>
            <span key={person.name}>
              {person.name} {person.number}
            </span>
            <button key={`b${person.name}`} onClick={() => deletePerson(person.id, person.name)}>delete</button>
          </div>
        ))}
    </Fragment>
  );
};
