import React from "react";
import "./Dp.css";
import airtelpb from "../images/airtelpb.png";
import jiomart from "../images/jiomart.png";
import zest from "../images/zest.png";
import pinelabs from "../images/pinelabs.png";

function Dp() {
	return (
		<div className="dp">
			<h1 data-aos="fade-down">Demand Partners</h1>
			<div className="dp_logos" data-aos="fade-left">
				<img
					className="dp_logoSize dp_airtel"
					src={airtelpb}
					alt="airtel Logo"
				/>
				<img
					className="dp_logoSize dp_jiomart"
					src={pinelabs}
					alt="airtel Logo"
				/>
				<img className="dp_logoSize dp_airtel" src={zest} alt="airtel Logo" />
				<img
					className="dp_logoSize dp_jiomart"
					src={jiomart}
					alt="airtel Logo"
				/>
				{/* <img className="dp_logoSize dp_airtel" src={} alt="airtel Logo" /> */}
			</div>
		</div>
	);
}

export default Dp;
