import React from "react";
import SearchForm from "./searchForm.js";

export default function SearchElement() {
	return (
		<div className="row">
			<div className="col-1 big-emoji">🌍</div>
			<div className="col-9 searchbar">
				<SearchForm />
			</div>
		</div>
	);
}
