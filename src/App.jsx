import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Getapp from "./components/Getapp";
// import { Link } from "react-router-dom";
import Dpform from "./components/Dpform";
import Saathiform from "./components/Saathiform";
import Merchantform from "./components/Merchantform";
import Login from "./Login";
import TC from "./components/TC";
import Privacypolicy from "./components/Privacypolicy";
// import playStoreIcon from "./images/playStoreIcon.png";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/home" element={[<Header />, <Home />, <Footer />]} />
					<Route
						path="/getapp"
						element={[<Header />, <Getapp />, <Footer />]}
					/>
					<Route
						path="/aboutUs"
						element={[<Header />, <AboutUs />, <Footer />]}
					/>
					<Route path="/blog" element={[<Header />, <Blog />, <Footer />]} />
					<Route
						path="/contactus"
						element={[<Header />, <ContactUs />, <Footer />]}
					/>

					<Route path="/" element={[<Header />, <Home />, <Footer />]} />

					<Route
						path="/dpform"
						element={[<Header />, <Dpform />, <Footer />]}
					/>
					<Route
						path="/merchantform"
						element={[<Header />, <Merchantform />, <Footer />]}
					/>
					<Route
						path="/saathiform"
						element={[<Header />, <Saathiform />, <Footer />]}
					/>
					<Route
						path="/userlogin"
						element={[<Header />, <Login />, <Footer />]}
					/>

					<Route
						path="/terms&conditions"
						element={[<Header />, <TC />, <Footer />]}
					/>
					<Route
						path="/privacypolicy"
						element={[<Header />, <Privacypolicy />, <Footer />]}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
