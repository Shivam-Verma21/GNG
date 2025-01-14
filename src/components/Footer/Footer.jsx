import React from 'react'
import "../../App.css"
import letsWorkImg from "../../assets/images/lets-work.png"
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer
                className="main-footer rel z-1"
                style={{ backgroundImage: "url(https://www.gnginnovation.com/assets/images/footer/footer-bg-shape.png)" }}
            >
                <div className="container container-1290">
                    <div className="footer-top pt-80 pb-60">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="footer-logo mb-20">
                                    <a href="/">
                                        <img
                                            src={logo}
                                            alt="G&G Innovations logo"
                                            title="G&G Innovations logo - Innovative technology"
                                            className="foot-logo"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-8 text-lg-end">
                                <div className="social-style-four mb-20">
                                    <a
                                        href=""
                                        target="_blank"
                                    >
                                        <i className="fab fa-facebook-f" />
                                        <span>Facebook</span>
                                    </a>
                                    <a
                                        href=""
                                        target="_blank"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                        <span>Linkedin</span>
                                    </a>
                                    <a href="" target="_blank">
                                        <i className="fab fa-instagram" />
                                        <span>Instagram</span>
                                    </a>
                                    <a className="a-icon cursor" href="" target="_blank">
                                        <i className="fab fa-youtube" />
                                        <span>Youtube</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <div className="footer-left-content pt-80">
                                <div className="lets-work mb-50">
                                    <img
                                        src={letsWorkImg}
                                        alt="Let's Work Man"
                                        className="mt-4 mt-lg-0"
                                    />
                                    <div className="dispaly-not">
                                        <span>Get In</span> <br />
                                        <span className="padding-left-touch">Touch</span>
                                    </div>
                                </div>
                                <p>Still got questions? Drop us an email at:</p>
                                <div className="footer-contact-info d-xl-flex">
                                    <a
                                        className="theme-btn style-three col-5 p-4 px-5"
                                        href=""
                                    >
                                        <span
                                            className="__cf_email__"
                                        >
                                            sales@gnginfotech.com
                                        </span>
                                        <i className="far fa-arrow-right" />
                                    </a>
                                    <a
                                        className="theme-btn style-three phone-number col-5"
                                        href=""
                                    >
                                        +971-50 7707942 <i className="far fa-arrow-right" />
                                    </a>
                                    <a
                                        className="theme-btn style-three phone-number col-5"
                                        href=""
                                    >
                                        +97143349500 <i className="far fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="footer-right-content">
                                <h4 className="footer-title">
                                    Quick Links
                                </h4>
                                <div className="footer-widget widget_nav_menu">
                                    <ul className="list-style-two">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="">About Us</a>
                                        </li>
                                        <li>
                                            <a href="">Team Members</a>
                                        </li>
                                        <li>
                                            <a href="">Contact Us</a>
                                        </li>
                                    </ul>

                                    <ul className="list-style-two">
                                        <li>
                                            <a href="">
                                                Enterprise Software Solutions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Emerging Technologies</a>
                                        </li>
                                        <li>
                                            <a href="">Interactive Technologies</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Digital Experience Solutions
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6">
                                <div className="footer-bottom-menu pt-40 pb-35 rpb-0">
                                    <ul>
                                        <li>
                                            <a href="">About Us</a>
                                        </li>
                                        <li>
                                            <a href="">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="">Portfolio</a>
                                        </li>
                                        <li>
                                            <a
                                                href=""
                                                target="_blank"
                                            >
                                                Google Maps
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-5 col-lg-6">
                                <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10">
                                    <p>
                                        Copyright @2024,&nbsp;
                                        {/* */}
                                        <a href="/">G&G Innovations.</a>&nbsp;
                                        {/* */}All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
