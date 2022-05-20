import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
// import playStoreIcon from "./images/playStoreIcon.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
	return (
		<Navbar expand="lg">
			<Container>
				<Link to="/home">
					<img className="header__logo" src={logo} alt="reBliss Logo" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "-5px" }}>
					<Nav className="me-auto navbarToggle">
						<Link to="/">
							<div className="header__option">
								<span className="header__optionName">Home</span>
							</div>
						</Link>
						<Link to="/aboutUs">
							<div className="header__option">
								<span className="header__optionName">About Us</span>
							</div>
						</Link>
						<Link to="/blog">
							<div className="header__option">
								<span className="header__optionName">Blog</span>
							</div>
						</Link>
						<Link to="/contactus">
							<div className="header__option">
								<span className="header__optionName">Contact Us</span>
							</div>
						</Link>

						{/* <Link to="/getapp">
							<div className="header__option getApp">
								<span className="header__optionName">Get App</span>
								<img src={playStoreIcon} alt="" />
							</div>
						</Link> */}

						<NavDropdown
							className="navdropdown btn ml-4 "
							title="Login"
							id="basic-nav-dropdown"
							variant="success"
							style={{ overflow: "inherit", height: "42px", zIndex: "9999" }}
						>
							<NavDropdown.Item>
								<Link to="/dpform">Demand Partner</Link>
							</NavDropdown.Item>

							<NavDropdown.Item>
								<Link to="/merchantform">Merchant</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/saathiform">Saathi</Link>
							</NavDropdown.Item>

							<NavDropdown.Divider />
							<NavDropdown.Item>
								<Link to="/userlogin">Login</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
