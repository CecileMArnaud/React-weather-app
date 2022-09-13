import React from "react";
import Precipitation from "./Precipitation.js";
import Wind from "./Wind.js";

export default function WeatherDetails() {
	return (
		<div className="row">
			<Precipitation />
			<Wind />
		</div>
	);
}
