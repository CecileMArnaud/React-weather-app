import React from "react";
import WindIcon from "./media/wind.png";

export default function Wind() {
	return (
		<div className="col">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<p>
							<img src={WindIcon} alt="wind icon" className="big-emoji" />
						</p>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h3 className="card-title">Wind</h3>
							<p className="card-text main main-wind">2km/h</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
