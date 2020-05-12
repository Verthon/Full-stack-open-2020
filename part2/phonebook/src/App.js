import React, { useState, useEffect } from "react";
import axios from "axios";
import { Persons } from "./Persons";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Notification } from "./Notification";
import personService from './services/persons'

const App = () => {
  const baseUrl = "http://localhost:3001/persons";
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPersons(response.data);
    });
  }, [persons]);

  const deletePerson = (id, name) => {
    if(window.confirm(`Delete ${name} ?`)) {
      personService.deletePerson(id)
      setPersons(persons.splice(id-1, 1))
      return
    }
    console.log('no clicked')
  }

  const isDuplicate = (persons, name) => {
    const data = persons.filter((person) => person.name === name);
    if (data.length === 0) return false;
    return true;
  };
  const resetInputValue = () => {
    setNewName("");
    setNewPhoneNumber("");
  };
  const addPerson = (e) => {
    e.preventDefault();
    if (isDuplicate(persons, newName)) {
      alert(`${newName} is already added to phonebook`);
      return resetInputValue();
    }
    personService.create({ name: newName, number: newPhoneNumber })
    setPersons([...persons, { name: newName, number: newPhoneNumber }]);
    setSuccessMessage(`Added ${newName}`)
    setTimeout(() => setSuccessMessage(''), 2000)
    resetInputValue();
  };
  return (
    <div>
      <h2>Phonebook</h2>
      {successMessage ? <Notification message={successMessage}/> : null}
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} deletePerson={deletePerson}/>
    </div>
  );
};

export default App;
