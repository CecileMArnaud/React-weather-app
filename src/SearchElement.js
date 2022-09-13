import React from "react";
import SearchForm from "./searchForm.js";
import EarthIcon from "./media/earth.png";

export default function SearchElement() {
	return (
		<div className="row">
			<div className="col-1 ">
				<img src={EarthIcon} alt="earth icon" className="big-emoji"></img>
			</div>
			<div className="col-9 searchbar">
				<SearchForm />
			</div>
		</div>
	);
}
