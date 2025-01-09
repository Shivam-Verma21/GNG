import React, { useState } from 'react'
import '../../App.css'
import logo from '../../assets/images/logo.png'
import toggler from "../../assets/images/toggler.svg"

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [servicesDropdown, setServicesDropdown] = useState(false)
    const [councilDropdown, setCouncilDropdown] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    return (
        <div>
            <header className="main-header menu-absolute">
                <div className="header-upper">
                    <div className="container container-1620 clearfix">
                        <div className="header-inner rpy-10 rel d-flex align-items-center">
                            <div className="logo-outer">
                                <div className="logo">
                                    <a href="/">
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            title="Logo"
                                            className="main-logo"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="nav-outer ms-lg-auto clearfix">
                                <nav className="main-menu navbar-expand-lg">
                                    <div className="accordion">
                                        <div className="navbar-header py-10">
                                            <div className="mobile-logo">
                                                <a href="/">
                                                    <img
                                                        src={logo}
                                                        alt="Logo"
                                                        title="Logo"
                                                        className="main-logo"
                                                    />
                                                </a>
                                            </div>
                                            <button className="navbar-toggle" type="button" onClick={() => setNavbar(!navbar)}>
                                                <span className="icon-bar" />
                                                <span className="icon-bar" />
                                                <span className="icon-bar" />
                                            </button>
                                        </div>
                                        <div className={`navbar-collapse clearfix collapse ${navbar ? 'show' : ''}`}>
                                            <ul className="navigation d-none d-lg-flex desktop-menu">
                                                <li className="dropdown eclink">
                                                    <a href="/#">
                                                        <span className="red">EC council</span>
                                                    </a>
                                                    <ul>
                                                        <li className="dropdown">
                                                            <a href="/">Ethical Hacking</a>
                                                            <ul style={{ marginLeft: 5 }}>
                                                                <li>
                                                                    <a href="/">Ethical Hacking (C|EH)</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">(C|EH) Master</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="/">Network Security</a>
                                                            <ul style={{ marginLeft: 5 }}>
                                                                <li>
                                                                    <a href="/">Certified Network Security</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Certified Application Security Engineer (C|ASE .NET)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Certified Application Security Engineer (C|ASE Java)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/c">
                                                                        Web Application Hacking and Security (W|AHS)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="/">Security Awareness</a>
                                                            <ul style={{ marginLeft: 5 }}>
                                                                <li>
                                                                    <a href="/">EC-Council Aware</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Cybersecurity Consulting and Training
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>


                                                <li className="dropdown">
                                                    <a href="/">Services</a>
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                Enterprise Software Solutions
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Emerging Technologies
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Interactive Technologies
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Digital Experience Solutions
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="/">Portfolio</a>
                                                </li>
                                                <li>
                                                    <a href="/">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/">Contact Us</a>
                                                </li>
                                            </ul>

                                            <ul className="navigation d-block d-lg-none mobile-menu">
                                                <li className="dropdown">
                                                    <a href="/">EC Council</a>
                                                    <ul style={{ display: councilDropdown ? 'block' : 'none' }}>
                                                        <ul>
                                                            <li className="sub-menu-mobile-options">Ethical Hacking</li>
                                                            <li>
                                                                <a href="/">Ethical Hacking (C|EH)</a>
                                                            </li>
                                                            <li>
                                                                <a href="/">(C|EH) Master</a>
                                                            </li>
                                                            <li className="sub-menu-mobile-options">Network Security</li>
                                                            <li>
                                                                <a href="/">Certified Network Security</a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                    Certified Application Security Engineer (C|ASE .NET)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                    Certified Application Security Engineer (C|ASE Java)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/">
                                                                    Web Application Hacking and Security (W|AHS)
                                                                </a>
                                                            </li>
                                                            <li className="sub-menu-mobile-options">Security Awareness</li>
                                                            <li>
                                                                <a href="/">EC-Council Aware</a>
                                                            </li>
                                                            <li>
                                                                <a href="/">Cybersecurity Consulting and Training</a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                    <div className="dropdown-btn">
                                                    <span className="far fa-plus" onClick={() => setCouncilDropdown(!councilDropdown)} />
                                                    </div>
                                                </li>

                                                <li className="dropdown">
                                                    <a href="/">Services</a>
                                                    <ul style={{ display: servicesDropdown ? 'block' : 'none' }}>
                                                        <li>
                                                            <a href="/">
                                                                Enterprise Software Solutions
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Emerging Technologies
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Interactive Technologies
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Digital Experience Solutions
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="dropdown-btn">
                                                        <span className="far fa-plus" onClick={() => setServicesDropdown(!servicesDropdown)} />
                                                    </div>
                                                </li>

                                                <li>
                                                    <a href="/">Portfolio</a>
                                                </li>
                                                <li>
                                                    <a href="/">About Us</a>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="/">Contact Us</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <div className="menu-btns">
                                <div className="menu-sidebar">
                                    <button onClick={() => setSidebar(!sidebar)}>
                                        <img src={toggler} alt="Toggler" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <section className={`${sidebar ? 'side-content-visible' : ''} hidden-bar`}>
                <div className="inner-box text-center">
                    <div className="cross-icon">
                        <span className="fa fa-xmark" onClick={() => setSidebar(false)} />
                    </div>
                    <div className="title">
                        <h4>Leave a Message</h4>
                    </div>
                    <div className="appointment-form">
                        <form>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Name" defaultValue="" />
                                <div className="help-block with-errors" />
                                <div>
                                    <p className="error-meg-contact wow fadeInUp delay-0-2s" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    defaultValue=""
                                />
                                <div className="help-block with-errors" />
                                <div>
                                    <p className="error-meg-contact wow fadeInUp delay-0-2s" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="phone_number"
                                    placeholder="Phone"
                                    defaultValue=""
                                />
                                <div className="help-block with-errors" />
                                <div>
                                    <p className="error-meg-contact wow fadeInUp delay-0-2s" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    placeholder="Country"
                                    defaultValue=""
                                />
                                <div className="help-block with-errors" />
                                <div>
                                    <p className="error-meg-contact wow fadeInUp delay-0-2s" />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message" rows={5} defaultValue={""} />
                                <div className="help-block with-errors" />
                                <div>
                                    <p className="error-meg-contact wow fadeInUp delay-0-2s" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="theme-btn">
                                    <span> Submit now</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="social-style-one">
                        <a
                            href="/"
                        // target="_blank"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            href=""
                        // target="_blank"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        <a
                            href=""
                        // target="_blank"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            href=""
                        // target="_blank"
                        >
                            <i className="fab fa-whatsapp" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
