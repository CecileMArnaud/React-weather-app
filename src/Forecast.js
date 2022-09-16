import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [weatherDataForecast, setWeatherDataForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function getForecast(response) {
		setWeatherDataForecast(response.data.daily);
		setLoaded(true);
	}
	if (loaded) {
		return (
			<div className="row">
				{weatherDataForecast.map(function(forecastday, index) {
					if (index > 0 && index < 6) {
						return <ForecastDay data={forecastday} key={index} />;
					} else {
						return null;
					}
				})}
			</div>
		);
	} else {
		let apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

		axios.get(apiURL).then(getForecast);
	}
}
