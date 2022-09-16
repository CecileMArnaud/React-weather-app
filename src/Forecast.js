import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";

export default function Forecast(props) {
	const [weatherDataForecast, setWeatherDataForecast] = useState({
		ready: false,
	});

	function getForecast(response) {
		setWeatherDataForecast({
			temp_min: Math.round(response.data.daily[0].temp.min),
			temp_max: Math.round(response.data.daily[0].temp.max),
			icon: response.data.daily[0].weather[0].id,
			date: new Date(response.data.daily[0].dt * 1000),
			ready: true,
		});
	}
	if (weatherDataForecast.ready) {
		return <ForecastDay data={weatherDataForecast} />;
	} else {
		let apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

		axios.get(apiURL).then(getForecast);
	}
}
