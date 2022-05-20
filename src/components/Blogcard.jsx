import React from "react";
import "./Blogcard.css";
import left from "../images/left.png";
import right from "../images/right.png";

function Blogcard() {
	return (
		// <div className="blogcard">
		// 	<img
		// 		src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2dzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
		// 		alt=""
		// 	/>
		// 	<div className="blogcard_items">
		// 		<h3>Blog Heading</h3>
		// 		<p>
		// 			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quam
		// 			possimus dolorum ipsa deserunt rerum repellat asperiores ex dolores
		// 			pariatur.
		// 		</p>
		// 	</div>
		// 	<a href="/">Read More..</a>
		// </div>
		<>
			<div>
				<div className="container">
					<div
						className="row"
						style={{
							backgroundColor: "rgb(239, 248, 243)",
							fontSize: "20px",
							margin: "30px",
							padding: "20px",
							overflow: "hidden",
							borderRadius: "10px",
							boxShadow: "8px 10px 18px grey",
						}}
					>
						<div className="col-sm-6 col-md-12">
							<center>
								<h1>
									<b>Benefits of Working as a Freelancer</b>
								</h1>
								<br />
								<br />
								<img
									src="blogpic/freelancerbenefit.jpg"
									style={{ width: "60%" }}
								/>
							</center>
							<br />
							<br />
							<p>
								If we visit the statistics, we can find that our country, India,
								is a storehouse to the second highest number of freelance
								professionals in the world, standing only behind the USA. It’s
								fairly intuitive to understand these numbers. Indians are known
								worldwide for being extremely skilled and great working
								partners. English being a popular language in the country helps
								in breaking continental language barriers and helps freelancers
								find well paying remote projects across the world, with
								extremely lucrative pay scales. Even if one looks at jobs within
								the subcontinent itself, freelancing can come with handsome
								payouts amidst its other many advantages.
								<br />
								In order to deep dive into the real benefits of working as a
								freelancer, Entrepreneur India spoke to two individuals well
								qualified to shed light and share experiences on the subject.
							</p>
							<br />
							<br />
							<h2>Immense Flexibility Of Location</h2>
							Freelancing empowers individuals to lead the much sought after
							laptop-lifestyle. It comes with immense freedom to work anytime,
							from anywhere in the world as long as the job is well done and on
							time. Dipesh opines, “For a freelancer, the most important thing
							is to deliver quality work and he gets to choose his location of
							work and has the flexibility of timing.”
							<br />
							<br />
							<h2>Opportunities To Earn More</h2>
							<br />
							Freelancing allows individuals to gain access to clients beyond
							any geographic barriers, be it different states in the country or
							even overseas locations. This helps a person stretch beyond
							geography and work on what rewards their skill the best. “Today
							the way business &amp; people work is changing rapidly.
							Freelancing opens up a new world of opportunities to the global
							workforce”, suggests Dipesh.
							<br />
							<br />
							<h2>Become A Better Human Being</h2>
							<br />A freelancing career can be described to be to the microcosm
							of one’s whole life. It ends up evolving a person into a better
							individual. This automatically happens as a part of the process,
							where one is able to view life as a whole in entirety, something
							much bigger than a single job or a client. Mukti shares, “You
							learn to help each other in the same industry. You see fellow
							freelancers like your own family instead of rivals. When you have
							faced non-payment, financially crazy months or difficult clients,
							you want to protect other freelancers from this kind of stress.”
							She shares that her experience as a freelancer has helped her
							appreciate the beauty of life, something that’s uncertain, yet
							beautiful and worth living.
						</div>
						{/*col*/}
					</div>
					{/*row*/}
				</div>
				{/*container*/}
				<div className="container">
					<ul className="pagination">
						<li className="page-item" style={{ marginLeft: "80vh" }}>
							<a className="page-link" href="#">
								<img src={left} style={{ width: "50px" }} />
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								<img src={right} style={{ width: "50px" }} />
							</a>
						</li>
					</ul>
				</div>
				<div className="modal fade" id="myModal">
					<div className="modal-dialog modal-sm model-lg modal-xl">
						<div className="modal-content">
							{/* Modal Header */}
							<div className="modal-header">
								<h4 className="modal-title">
									Join as a reBLISS Sathi/ reBLISS Merchant
								</h4>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
								/>
							</div>
							{/* Modal body */}
							<div className="modal-body">
								<div id="join">
									<div className="row" style={{ marginTop: "40px" }}>
										<div className="col-sm-6 col-md-4">
											<div className="supply">
												<center>
													<h3>
														{" "}
														<b>Join As A Supply Partner</b>{" "}
													</h3>
													<h4>
														{" "}
														<b>(reBLISS Sathi / reBLISS Partner)</b>
													</h4>
												</center>
												<br />
												<p>
													reBLISS Supply partner is somebody who wants to work
													with reBLISS as per choice of time, work &amp; place.
												</p>
												<button
													className="btn-success"
													data-bs-toggle="collapse"
													data-bs-target="#supplydata"
													id="toggle"
													onclick="action();"
												>
													Read More..
												</button>
												<div id="supplydata" className="collapse">
													You can join as a reBLISS Sathi if you are an
													individual <br /> OR <br /> Join as a reBLISS partner
													if are having a team.
												</div>
												{/*collapse*/}
												<br />
												<br />
												<center>
													<a href="https://play.google.com/store/apps/details?id=com.rebliss&hl=en">
														<p>Click here to download reBLISS App</p>
													</a>
													<a href="https://play.google.com/store/apps/details?id=com.rebliss&hl=en">
														<img src="webpic/playstore.png" />
													</a>
												</center>
											</div>
											{/*supply*/}
										</div>
										{/*col*/}
										<div className="col-sm-6 col-md-4">
											<div className="merchant">
												<h3>
													{" "}
													<b>Join As A reBLISS Merchant Sathi</b>{" "}
												</h3>
												<p>
													{" "}
													If you are having a store(Download the reBLISS app ,
													complete sign-up as a reBLISS Sathi &amp; Click on the
													option "Do you have a store" as "yes")
												</p>
												<center>
													<a href="https://play.google.com/store/apps/details?id=com.rebliss&hl=en">
														<p>Click here to download reBLISS App</p>
													</a>
													<a href="https://play.google.com/store/apps/details?id=com.rebliss&hl=en">
														<img src="webpic/playstore.png" />
													</a>
												</center>
											</div>
											{/*merchant*/}
										</div>
										{/*col*/}
										<div className="col-sm-6 col-md-4">
											<div className="partner">
												<center>
													<h3>
														{" "}
														<b>
															Join As A <br /> Demand Partner
														</b>{" "}
													</h3>
												</center>
												<br />
												<p>
													reBLISS Demand Partner is a company/organization that
													want to scale up their operations on variable model
													through a team of reBLISS Sathis spread occurs the
													country. Benefits of becoming a reBLISS Demand Partner
													:-
												</p>
												<button
													className="btn-success"
													data-bs-toggle="collapse"
													data-bs-target="#partnerdata"
													id="dp"
													onclick="daction();"
												>
													Read More..
												</button>
												<div id="partnerdata" className="collapse">
													reBliss is the change you are looking for your
													Business. Numerous brands are partnering with reBLISS
													to change the way their business is operating, We act
													as a catalyst to build sustainable business growth and
													development.
													<br />
													<ul>
														<li>
															We reduce the gestation period of business
															operations.
														</li>
														<li>
															We make your products and services to reach out to
															various locations at speed and scale.
														</li>
														<li>
															We can help you in 360 degrees business change by
															creating or augmenting your existing opertaions of
															demand generation, custmore care and supply chain
															management.
														</li>
														<li>
															With our flexible and tialor-made solutions you
															can optimize your operating cost, enhance your
															profits to add value to stakeholders and more
															delighted customers.
														</li>
													</ul>
												</div>
												<br />
												<br />
												<center>
													<form action="demandpartner.php" method="GET">
														<input
															type="text"
															name="company"
															placeholder="Company/organization Name"
															className="Demand"
														/>
														<br />
														<input
															type="email"
															name="email"
															placeholder="official Mail ID"
															className="Demand"
														/>
														<br />
														<input
															type="tel"
															name="contact"
															placeholder="Mobile Number"
															className="Demand"
														/>
														<br />
														<textarea
															row={5}
															className="Demand"
															name="requirement"
															placeholder="Tell Us Your Requirement in Brief"
															defaultValue={""}
														/>
														<br />
														<br />
														<button
															type="submit"
															name="submit"
															className="query"
														>
															Submit
														</button>
													</form>
												</center>
											</div>
										</div>
										{/*col*/}
									</div>
									{/*row*/}
								</div>
								{/*join*/}
							</div>
							{/* model body*/}
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-danger"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Blogcard;
