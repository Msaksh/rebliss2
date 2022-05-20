import React, { useEffect } from "react";
import "./Downloads.css";

function Downloads() {
	useEffect(() => {
		const counters = document.querySelectorAll(".counter");
		const speed = 200;

		counters.forEach((counter) => {
			const updateCount = () => {
				const target = +counter.getAttribute("data-target");
				const count = +counter.innerText;

				const inc = target / speed;

				if (count < target) {
					counter.innerText = count + inc;
					setTimeout(updateCount, 1);
				} else {
					count.innerText = target;
				}
			};
			updateCount();
		});
	});

	return (
		<div
			className="downloads"
			data-aos="flip-down"
			onClick={() =>
				(window.location.href =
					"https://play.google.com/store/apps/details?id=com.rebliss")
			}
		>
			<div className="downloads_heading flexBox rs-counter-list">
				{/* <p className="downloads_headingNum" >60k</p> */}
				<div className="counter downloads_headingNum" data-target="60000">
					0
				</div>
				<p className="downloads_headingPlus">+</p>
				<p>Downloads</p>
			</div>

			<div className="numberOfSaathi flexBox">
				<p className="downloads_headingNum">5k </p>
				<p className="downloads_headingPlus">+ </p>
				<p>Sathi's </p>
			</div>

			<div className="numberOfMer flexBox">
				<p className="downloads_headingNum">10L </p>
				<p className="downloads_headingPlus">+ </p>
				<p>Merchant's </p>
			</div>
		</div>
	);
}

export default Downloads;
