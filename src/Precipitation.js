import React from "react";
import PrecipitationIcon from "./media/water-drop.png";

export default function Precipitation(props) {
	return (
		<div className="col">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<p>
							<img
								src={PrecipitationIcon}
								alt="water drop icon"
								className="big-emoji"
							/>
						</p>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h3 className="card-title">Precipitation</h3>
							<p className="card-text main main-humidity">
								{props.data.humidity}%
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
