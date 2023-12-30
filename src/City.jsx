import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div class="output">
        <h1 >{city.main.temp} °C</h1>
        <h1 >{city.name}</h1>
        <h1 >{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;
