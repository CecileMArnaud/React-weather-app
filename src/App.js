import "./App.css";
import React, { useState } from "react";
import Header from "./Header.js";
import MainResults from "./MainResults.js";
import WeatherDetails from "./WeatherDetails.js";
import Forecast from "./Forecast.js";
import Credits from "./Credits.js";
import axios from "axios";
import EarthIcon from "./media/earth.png";

export default function App() {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [cityName, setCityName] = useState("Biarritz");

	function getWeather(response) {
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			icon: response.data.weather[0].id,
			wind: response.data.wind.speed,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
		});
	}
	function runWeatherApi() {
		let apiKey = "3834107558d00b81fea1969225682a38";
		let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
		axios.get(apiURL).then(getWeather);
	}

	function handleSubmit(event) {
		event.preventDefault();
		runWeatherApi();
	}
	function handleQuery(event) {
		setCityName(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<div className="subcontainer">
						<div className="row">
							<div className="col-2 ">
								<img
									src={EarthIcon}
									alt="earth icon"
									className="big-emoji"
								></img>
							</div>
							<div className="col-8 searchbar">
								<form
									action="search"
									className="search-form"
									onSubmit={handleSubmit}
								>
									<label for="search-city">The weather in:</label>
									<input type="text" id="search-city" onChange={handleQuery} />
									<input
										type="submit"
										value="Search"
										className="btn btn-primary main-buttons search-button"
									/>
								</form>
							</div>
						</div>
						<MainResults data={weatherData} />
						<WeatherDetails data={weatherData} />
						<Forecast coordinates={weatherData.coordinates} />
					</div>
				</div>
				<Credits />
			</div>
		);
	} else {
		runWeatherApi();
		return "Loading...";
	}
}
