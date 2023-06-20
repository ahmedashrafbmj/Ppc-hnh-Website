import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import SocialIcon from "../../components/social-icon";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top position-relative">
                <img
                    className="footer-shape"
                    src={process.env.PUBLIC_URL + "/images/footer/1.png"}
                    alt="shape"
                />
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <Logo
                                    classOption="footer-logo mb-9"
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo-footer.png`}
                                />
                                <p>
                                We work with a passion of taking challenges and creating new ones in advertising sector.
                                </p>
                                <ul className="footer-social-links">
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.facebook.com/"
                                            icon="icofont-facebook"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.instagram.com/"
                                            icon="icofont-instagram"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://twitter.com/"
                                            icon="icofont-twitter"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.whatsapp.com/"
                                            icon="icofont-whatsapp"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-7 offset-xl-1">
                            <div className="footer-widget">
                                <h4 className="title">Quick Link</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/about"
                                            }
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/service"
                                            }
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/blog-right-sidebar"
                                            }
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL + "/contact"
                                            }
                                        >
                                            Contact 
                                        </Link>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Services</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/2`
                                            }
                                        >
                                            Business Plan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/3`
                                            }
                                        >
                                            Creative Strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/4`
                                            }
                                        >
                                            Branding{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/1`
                                            }
                                        >
                                            Digital Solution
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/5`
                                            }
                                        >
                                            Marketing Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/6`
                                            }
                                        >
                                            Campaign &amp; PR
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Contact info</h4>
                                <p>
                                1122 Bowie Dr, Lewisville, TX 75077 <br/>
                                122 Harold Rd, London E13 0SF, United Kingdom
                                </p>
                                <ul className="address">
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+12354569874"
                                        >
                                            0044 7448 782022
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+98745612398"
                                        >
                                           000000000000
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:Info@sasstechnologies.com"
                                        >
                                            Info@sasstechnologies.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:Info@sasstechnologies.com"
                                        >
                                            sasstechnologies.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>
                                    Copyright &copy; 2023 Made with{" "}
                                    <i className="icofont-heart-alt"></i> By{" "}
                                    <a
                                        href="https://themeforest.net/user/codecarnival/portfolio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Sas Technologies
                                    </a>
                                    , All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='text' style={{}}>
				
					   <BsWhatsapp style={{fontSize:'28px'}}/>	
				
					<span style={{fontSize:'18px'}}> <a  href={`https://wa.me/+447312675064?text=Referral%20link%20website%3A%20www.assignmenthelps.org`} target="_blank" rel="noopener noreferrer">+ 447312 675064</a></span>
				 </div> */}
            <div style={{position: "fixed",top: "88%",left:"5%"}}>
                <a href="https://wa.me/447448782022?text=Referral%20link%20website%3A%20www.sasstechnologies.com"><img src="/images/whatsapp icon.png " style={{width:"50%"}} alt="" /></a>
            </div>
        </footer>
    );
};

export default Footer;
