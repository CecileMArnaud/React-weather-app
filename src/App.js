import "./App.css";
import React, { useState } from "react";
import Header from "./Header.js";
import SearchElement from "./SearchElement.js";
import MainResults from "./MainResults.js";
import WeatherDetails from "./WeatherDetails.js";
import Forecast from "./Forecast.js";
import Credits from "./Credits.js";
import axios from "axios";

export default function App() {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function getWeather(response) {
		console.log(response);
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			icon: response.data.weather[0].id,
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}
	function runWeatherApi() {
		let apiKey = "3834107558d00b81fea1969225682a38";
		let city = "Daejeon";
		let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiURL).then(getWeather);
	}

	if (weatherData.ready) {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<div className="subcontainer">
						<SearchElement />
						<MainResults data={weatherData} />
						<WeatherDetails data={weatherData} />
						<Forecast />
					</div>
					<Credits />
				</div>
			</div>
		);
	} else {
		runWeatherApi();
		return "Loading...";
	}
}
