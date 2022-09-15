import React from "react";
import Precipitation from "./Precipitation.js";
import Wind from "./Wind.js";

export default function WeatherDetails(props) {
	return (
		<div className="row">
			<Precipitation data={props.data} />
			<Wind data={props.data} />
		</div>
	);
}
