import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Country } from "./Country";

const App = () => {
  const api = "https://restcountries.eu/rest/v2/name";
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchForCountries(query);
  }, [query]);

  const fetchCountries = (name) => {
    return fetch(`${api}/${name}`);
  };

  const searchForCountries = (name) => {
    console.log("name", name);
    fetchCountries(name)
      .then((result) => result.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  };

  const renderCountries = () => {
    if (countries.length === 1) {
      return <Country key="1" country={countries[0]} single={true} weatherIncluded={true}/>;
    }
    return countries.map((country) => (
      <Country key={country.name} country={country} single={false} weatherIncluded={false}/>
    ));
  };
  return (
    <div>
      find countries:{" "}
      <input type="search" onChange={(e) => setQuery(e.target.value)} />
      <div>
        {countries.length > 9 || countries === undefined ? (
          <p>Too many matches, specify another filter.</p>
        ) : (
          renderCountries()
        )}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
