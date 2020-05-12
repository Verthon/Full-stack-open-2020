import React from "react";

export const PersonForm = ({addPerson, newName, setNewName, newPhoneNumber, setNewPhoneNumber}) => {
  return (
    <form onSubmit={(e) => addPerson(e)}>
      <h2>Add new</h2>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{" "}
        <input
          value={newPhoneNumber}
          onChange={(e) => setNewPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
