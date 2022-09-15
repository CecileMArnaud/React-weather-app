import React from "react";
import MainData from "./MainData.js";
import MainIcon from "./MainIcon.js";

export default function MainResults(props) {
	return (
		<div className="row main-results">
			<MainData data={props.data} />
			<MainIcon data={props.data} />
		</div>
	);
}
