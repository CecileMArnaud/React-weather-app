import React from "react";

export default function searchForm() {
	return (
		<form action="search" className="search-form">
			<label for="searchbar">The weather in:</label>
			<input type="text" id="search-city" />
			<input
				type="submit"
				value="Search"
				className="btn btn-primary main-buttons search-button"
			/>
			<button className="btn btn-secondary main-buttons current-location">
				Current Location
			</button>
		</form>
	);
}
