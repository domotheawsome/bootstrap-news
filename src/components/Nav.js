import React, { useEffect, useState } from "react";

export default function Nav() {
  const [temperature, setTemperature] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [icon, setIcon] = useState(null);

  function getTodayDate() {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
  }

  async function fetchTemperature() {
    const apiKey = '254c7ba8581047747886beceea397649';
    const city = 'Corvallis,or,us';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const temperature = data.main.temp;
      const tempMin = data.main.temp_min;
      const tempMax = data.main.temp_max;
      const icon = data.weather[0].icon;
      setTemperature(temperature);
      setTempMin(tempMin);
      setTempMax(tempMax);
      setIcon(icon);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTemperature();
  }, []);

  return (
    <div className="nav--container">
      <p className="nav--date">{getTodayDate()}</p>
      <h1 className="nav--title">The Bootstrap Times</h1>
      <p>{temperature && icon && 
      <div className="nav--temperature">
        <img className="temp--icon" src={`https://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
      <p className="temp">{temperature.toFixed(1)}°F</p> 
      <p className="temp-max">{tempMin.toFixed(1)}°F</p>
      <p className="temp-min">{tempMax.toFixed(1)}°F </p>
</div>}</p>
    </div>
  );
}