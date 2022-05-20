import React from "react";
import "./Benefits.css";
import Saathiimg from "../images/Saathiimg.png";
import Merchantimg from "../images/Merchantimg.png";
import Partnerimg from "../images/Partner.png";
import Tsmimg from "../images/Tsm.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Benefits() {
	return (
		<div className="benefits">
			<h1 className="benefits_h1" data-aos="fade-down">
				Benefits of Joining reBLISS
			</h1>

			<div className="benefits_points">
				<div
					className="benefits_Sathi benefits_pointsSection"
					data-aos="fade-right"
				>
					<div className="benefits_Info">
						<span className="benefits_Underline">Saathi</span>
						<h1>
							<ArrowRightAltIcon />
							reBLISS के साथ , जितनी मेहनत उतनी कमाई...
						</h1>
						<h1>
							<ArrowRightAltIcon /> Zero investment
						</h1>
						<h1>
							<ArrowRightAltIcon /> Skill oriented tasks
						</h1>
						<h1>
							<ArrowRightAltIcon /> Training and upskilling
						</h1>
						<h1>
							<ArrowRightAltIcon /> Shortest Payout cycle
						</h1>
					</div>
					<img src={Saathiimg} className="benefitsImg" alt="Sathi" />
				</div>

				<div
					className="benefits_Tsm benefits_pointsSection"
					data-aos="fade-left"
				>
					<img src={Tsmimg} className="benefitsImg" alt="Sathi" />

					<div className="benefits_Info">
						<span className="benefits_Underline">TSM</span>
						<h1>
							<ArrowRightAltIcon />
							Your own business in your city
						</h1>
						<h1>
							<ArrowRightAltIcon /> From job seeker to the job provider
						</h1>
						<h1>
							<ArrowRightAltIcon /> Skill oriented tasks
						</h1>
						<h1>
							<ArrowRightAltIcon /> Commission-based income
						</h1>
					</div>
				</div>

				<div
					className="benefits_Partner benefits_pointsSection"
					data-aos="fade-right"
				>
					<div className="benefits_Info">
						<span className="benefits_Underline">Partner</span>
						<h1>
							<ArrowRightAltIcon /> Networking in multiple cities
						</h1>
						<h1>
							<ArrowRightAltIcon /> Supervision of saathis on a large scale
						</h1>
						<h1>
							<ArrowRightAltIcon /> Commission-based income
						</h1>
					</div>
					<img src={Partnerimg} className="benefitsImg" alt="Sathi" />
				</div>

				<div
					className="benefits_Merchant benefits_pointsSection"
					data-aos="fade-left"
				>
					<img src={Merchantimg} className="benefitsImg" alt="Merchant" />
					<div className="benefits_Info">
						<span className="benefits_Underline">Merchant</span>
						<h1>
							<ArrowRightAltIcon />
							Diverse products
						</h1>
						<h1>
							<ArrowRightAltIcon />
							Collaborations with established brands
						</h1>
						<h1>
							<ArrowRightAltIcon />
							Customer service support
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
