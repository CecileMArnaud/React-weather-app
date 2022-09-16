import React from "react";
import WeatherIcon from "react-icons-weather";

export default function ForecastDay(props) {
	function day() {
		let date = new Date(props.data.date * 1000);
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = date.getDay();
		return days[day];
	}
	return (
		<div className="forecast">
			<div className="forecast-day">{day()}</div>
			<WeatherIcon
				name="owm"
				iconId={props.data.icon.toString()}
				flip="horizontal"
				rotate="90"
				className="forecast-weather-icon"
			/>
			<div className="forecast-temp">
				<span className="forecast-temp-max">{props.data.temp_max}˚C</span>
				<span className="forecast-temp-min">{props.data.temp_min}˚C</span>
			</div>
		</div>
	);
}
