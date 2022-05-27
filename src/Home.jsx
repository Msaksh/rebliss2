import React from "react";
import HomeCarousel from "./HomeCarousel";
import Homebody from "./components/Homebody";
import "./Home.css";
// import Intro from "../src/components/Intro";

function Home() {
    return (
        <div className="home">
            <HomeCarousel />
            {/* <Intro /> */}
            <Homebody />
        </div>
    );
}

export default Home;
