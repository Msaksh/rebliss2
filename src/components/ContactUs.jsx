import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
// import ContactUsImg from "../images/contactUsImage.jpg";

function ContactUs() {
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [subject, setSubject] = useState("");

	const [message, setMessage] = useState("");

	const lgnbtn = async () => {
		if (name === "") {
			alert("Please enter name");
			return false;
		} else if (email === "") {
			alert("Please enter name");
			return false;
		} else if (mobile === "") {
			alert("Please enter mobile");
			return false;
		} else if (subject === "") {
			alert("Please enter subject");
			return false;
		} else if (message === "") {
			alert("Please enter message");
			return false;
		}
		const regData = { name, email, mobile, subject, message };
		const res = await axios.post(
			"http://localhost/rebliss/api/contact/add_user",
			regData
		);
		if (res.status === 200) {
			alert("submitted successfully!");
			setName("");

			setEmail("");
			setMobile("");
			setSubject("");
			setMessage("");
		}
	};

	return (
		<div className="contact_formHeading">
			<h1>Enquiry Form</h1>
			<div className="contact_form">
				{/* <img src={ContactUsImg} alt="contactUSImage" /> */}
				<form action="#">
					<label>Full Name</label>
					<input
						type="text"
						placeholder="Enter your name *"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label>Mobile no.</label>

					<input
						type="text"
						placeholder="Enter mobile number *"
						required
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
					/>
					<label>Email</label>

					<input
						type="text"
						placeholder="Enter email id *"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Subject</label>

					<input
						type="text"
						placeholder="Enter Subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
					<label>Message</label>

					<textarea
						rows="2"
						cols="50"
						name="comment"
						form="usrform"
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					>
						Enter text here...
					</textarea>

					<button type="button" onClick={(e) => lgnbtn()}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactUs;
