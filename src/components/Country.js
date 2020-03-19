import React from "react"

const Country = ({ country }) => {
  return (
    <div className="container">
      <h2>{country.name} :</h2>
      <ul>
        <li>LastUpdate: {new Date(country.lastUpdate).toDateString()}</li>
        <li>Confirmed: {country.confirmed.value}</li>
        <li>Recovered: {country.recovered.value}</li>
        <li>Deaths: {country.deaths.value}</li>
      </ul>
    </div>
  )
}

export default Country
