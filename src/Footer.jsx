import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";
import Whatsapp from "./components/Whatsapp";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import Getapp from "./components/Getapp";
import playStoreIcon from "./images/playStoreIcon.png";

function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    console.log(year);

    function handleClick() {
        alert("Coming Soon.....");
    }

    return (
        <div className="footer" id="footer">
            <div className="top">
                <Whatsapp />
                <Link to="/getapp">
                    <div className="header__option getApp">
                        <img src={playStoreIcon} alt="" />
                    </div>
                </Link>

                <div className="footer_ql footer_flexbox padd">
                    <h1>QUICK LINKS</h1>

                    <div className="footer_divs">
                        <Link to="/">
                            <span>HOME</span>
                        </Link>
                        <Link to="/aboutUs">
                            <span>ABOUT US</span>
                        </Link>
                        <Link to="/blog">
                            <span>BLOGS</span>
                        </Link>
                        <Link to="/">
                            <span onClick={handleClick}>TRAINING</span>
                        </Link>
                        <Link to="/contactus">
                            <span>CONTACT US</span>
                        </Link>
                    </div>
                </div>

                <div className="footer_benefits footer_flexbox padd">
                    <h1>BENEFITS</h1>
                    <div className="footer_divs">
                        <span className="saathiSpan">SAATHI</span>
                        <span className="tsmSpan">TSM</span>
                        <span className="merchantSpan">MERCHANT</span>
                        <span className="merchantSpan">PARTNER</span>
                    </div>
                </div>

                <div className="footer_lastbox">
                    <div className="footer_address marg">
                        <h1>ADDRESS</h1>

                        <div className="footer__addressBox">
                            <p>
                                reBLISS, A-108, I-thum Tower Noida
                                <br />
                                Sector 62, 201301
                            </p>
                        </div>
                    </div>
                    <div className="footer_contact marg">
                        <h1>CONTACT US</h1>
                        <p> Phone No - 09289046988</p>
                        <p>Email Us - customercare@rebliss.in</p>
                    </div>

                    <div className="footer_follow marg">
                        <h1>FOLLOW US</h1>
                        <div className="">
                            <a
                                href="https://www.linkedin.com/company/rebliss-in/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href="https://www.facebook.com/reblissapp/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="https://instagram.com/reblissapp?igshid=YmMyMTA2M2Y="
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="https://t.me/reBLISS"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <TelegramIcon />
                            </a>
                            <a
                                href="https://www.youtube.com/c/reBLISS"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <YouTubeIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerBottom">
                <div className="footerBottom_insideDiv">
                    <div className="footer__copyright gridFlexbox">
                        &copy; {year}
                        <p>reBLISS</p>
                        {/* <img
                        className="footer__logo"
                        src={logo}
                        alt="reBLISS icons"
                    /> */}
                    </div>
                    <Link
                        to={"/terms&conditions"}
                        className="footerBottom_tcpp"
                    >
                        <div className="footer__tc gridFlexbox">
                            Terms & Conditions
                        </div>
                    </Link>
                    <Link to={"/privacypolicy"} className="footerBottom_tcpp">
                        <div className="footer__tc gridFlexbox">
                            Privacy Policy
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
