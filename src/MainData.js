import React from "react";

export default function MainData(props) {
	return (
		<div className="col-7 main-info">
			<h2>
				<span id="city-name">
					{props.data.city}
					<i className="fa-solid fa-spinner fa-spin-pulse"></i>
				</span>
			</h2>
			<div id="today-date">Monday 12th</div>
			<div>
				<span className="main main-temperature">
					{Math.round(props.data.temperature)}
				</span>
				<span id="units">
					<a href="/" id="celsius-link" className="active">
						˚C
					</a>{" "}
					|
					<a href="/" id="fahrenheit-link">
						˚F
					</a>
				</span>
			</div>
		</div>
	);
}
