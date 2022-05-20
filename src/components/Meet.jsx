import React from "react";
import "./Meet.css";
// import Carousel from "react-bootstrap/Carousel";

function Meet() {
	return (
		<div className="meet">
			<h1 data-aos="fade-down">Meet our reBLISSians</h1>
			<div className="meet_video" data-aos="zoom-in">
				<iframe
					src="https://www.youtube.com/embed/lDSo2-L_q70"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>

				<iframe
					src="https://www.youtube.com/embed/dNOVdoCXx0w"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>

				<iframe
					src="https://www.youtube.com/embed/iJ8v3ul438A"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}

export default Meet;
