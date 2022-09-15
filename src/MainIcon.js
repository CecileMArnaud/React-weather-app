import React from "react";
import WeatherIcon from "react-icons-weather";

export default function MainIcon(props) {
	return (
		<div className="col-5  main-icon ">
			<WeatherIcon
				name="owm"
				iconId={props.data.icon}
				flip="horizontal"
				rotate="90"
				className="weather-icon"
			/>
			<div className="main-description"></div>
		</div>
	);
}
