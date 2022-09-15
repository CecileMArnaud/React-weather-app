import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function MainData(props) {
	let [unit, setUnit] = useState("celsius");

	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}
	if (unit === "celsius") {
		return (
			<div className="col-7 main-info">
				<h2>
					<span id="city-name">
						{props.data.city}
						<i className="fa-solid fa-spinner fa-spin-pulse"></i>
					</span>
				</h2>
				<div id="today-date">
					<FormattedDate date={props.data.date} />
				</div>
				<div>
					<span className="main main-temperature">
						{Math.round(props.data.temperature)}
					</span>
					<span className="units">
						˚C |
						<a href="/" onClick={showFahrenheit}>
							˚F
						</a>
					</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="col-7 main-info">
				<h2>
					<span id="city-name">
						{props.data.city}
						<i className="fa-solid fa-spinner fa-spin-pulse"></i>
					</span>
				</h2>
				<div id="today-date">
					<FormattedDate date={props.data.date} />
				</div>
				<div>
					<span className="main main-temperature">
						{Math.round((props.data.temperature * 9) / 5 + 32)}
					</span>
					<span className="units">
						˚F |{" "}
						<a href="/" onClick={showCelsius}>
							˚C
						</a>
					</span>
				</div>
			</div>
		);
	}
}
