import React from "react";
import WeatherIcon from "react-icons-weather";

export default function Forecast() {
	return (
		<div className="forecast">
			<div className="forecast-day">Thu</div>
			<WeatherIcon
				name="owm"
				iconId={800}
				flip="horizontal"
				rotate="90"
				className="forecast-weather-icon"
			/>
			<div className="forecast-temp">
				<span className="forecast-temp-max">19˚C</span>
				<span className="forecast-temp-min">10˚C</span>
			</div>
		</div>
	);
}
