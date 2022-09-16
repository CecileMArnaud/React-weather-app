import React from "react";
import WeatherIcon from "react-icons-weather";

/* temp_min: Math.round(response.data.daily[0].temp.min),
			temp_max: Math.round(response.data.daily[0].temp.max),
			icon: response.data.daily[0].weather[0].id,
			date: new Date(response.data.daily[0].dt * 1000),
			ready: true,
		} */

export default function ForecastDay(props) {
	function day() {
		let date = new Date(props.data.dt * 1000);
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = date.getDay();
		return days[day];
	}

	function maxTemp() {
		let temperature = props.data.temp.max;
		return Math.round(temperature);
	}
	function minTemp() {
		let temperature = props.data.temp.min;
		return Math.round(temperature);
	}
	return (
		<div className="col forecast">
			<div className="forecast-day">{day()}</div>
			<WeatherIcon
				name="owm"
				iconId={props.data.weather[0].id.toString()}
				flip="horizontal"
				rotate="90"
				className="forecast-weather-icon"
			/>
			<div className="forecast-temp">
				<span className="forecast-temp-max">{maxTemp()}˚C</span>
				<span className="forecast-temp-min">{minTemp()}˚C</span>
			</div>
		</div>
	);
}
