import React, { useEffect, useState } from "react";

export const Country = ({ country, single, weatherIncluded }) => {
  const api = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`;
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch(api, {signal: abortController.signal})
      .then((result) => result.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error))
    return () => {
      abortController.abort();
    };
  }, [weather, api]);
  return single ? (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="" />
      <h2>Weather in {country.capital}</h2>
      <p>
        <b>temperature:</b> 3
      </p>
      <p>
        <b>wind:</b>{" "}
      </p>
    </div>
  ) : (
    <div>{country.name}</div>
  );
};
