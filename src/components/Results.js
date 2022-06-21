import { useState, useEffect } from 'react';

import { Card } from 'primereact/card';
import GetUserList from './GetUserList';

const Results = (props) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=2f78084d3dd64c1ea8c174235221606&q=${props.location}&days=1&aqi=no&alerts=no
      `
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  console.log(weather);

  return (
    <div>
      <Card
        title="Current Conditions"
        subTitle={weather ? `${weather.location.name}, ${weather.location.region}` : ''}
        style={{
          minHeight: '400px',
          backgroundColor: '#ceebf3',
          margin: '20px'
        }}>
        <p>{weather ? `${weather.current.temp_f}` : ''}</p>
        <p>{weather ? `${weather.forecast.forecastday[0].day.daily_chance_of_rain}` : ''}</p>
        <p>{weather ? `${weather.location.localtime}` : ''}</p>
      </Card>
      <GetUserList />
    </div>
  );
};

export default Results;
