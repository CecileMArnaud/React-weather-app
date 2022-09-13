import "./App.css";
import React from "react";
import Header from "./Header.js";
import SearchElement from "./SearchElement.js";
import MainResults from "./MainResults.js";
import WeatherDetails from "./WeatherDetails.js";
import Forecast from "./Forecast.js";
import Credits from "./Credits.js";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<div className="subcontainer">
					<SearchElement />
					<MainResults />
					<WeatherDetails />
					<Forecast />
				</div>
				<Credits />
			</div>
			<script src="src/script.js"></script>
		</div>
	);
}
