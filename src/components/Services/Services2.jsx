import React from 'react'
import heroTwoBg from '../../assets/images/hero-two-bg.png';
import bank from "../../assets/images/services2/bank.png";
import insurance from "../../assets/images/services2/insurance.png";
import hospitality from "../../assets/images/services2/hospitality.png";
import education from "../../assets/images/services2/education.png";
import healthcare from "../../assets/images/services2/healthcare.png";
import retail from "../../assets/images/services2/retail.png";
import transport from "../../assets/images/services2/transport.png";
import technology from "../../assets/images/services2/technology.png";
import energy from "../../assets/images/services2/energy.png";
import communication from "../../assets/images/services2/communication.png";
import consumerGoods from "../../assets/images/services2/consumer-goods.png";
import travel from "../../assets/images/services2/travel.png";
import manufacturing from "../../assets/images/services2/manufacturing.png";

const Services2 = () => {
    return (
        <div>
            <section
                className="service-area-two pt-110 rpt-85 pb-30"
                style={{ backgroundImage: `url(${heroTwoBg})` }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title mb-15">Industries We Serve</span>
                                <h2>
                                    We cater to diverse industries, helping them with digital
                                    transformation
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center industries-main">
                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={bank}
                                            alt="Bank using digital technology for secure transactions."
                                            title="Banking and Financial Services Solution"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Bank</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={insurance}
                                            alt="Insurance agent using a tablet to process a claim."
                                            title="Digital Insurance Solutions"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Insurance</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={hospitality}
                                            alt="Hotel lobby with guests using mobile check-in. All in One CRM"
                                            title="Hospitality with Technology | CRM by G&G Innovations"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Hospitality</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={education}
                                            alt="Students using tablets in a modern classroom."
                                            title="Digital Transformation in Education | ERP by G&G Innovations"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Education</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={healthcare}
                                            alt="Doctor using a digital interface to review patient records."
                                            title="Transforming Healthcare with Digital Technology"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Health Care</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={retail}
                                            alt="Shoppers using mobile devices in a retail store."
                                            title="Digital Solutions for Retail"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Retail</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={transport}
                                            alt="Logistics manager tracking shipments on a digital dashboard"
                                            title="Digital Transformation in Transportation and Logistics"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Transport</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={technology}
                                            alt="Abstract representation of interconnected data and digital networks"
                                            title="Driving Innovation Through Technology"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Technology</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={energy}
                                            alt="Energy worker using a tablet to monitor energy grids."
                                            title="Digital Solutions for the Energy Sector"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Energy</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={communication}
                                            alt="People connecting through various digital communication devices."
                                            title="Enhancing Communication with Digital Solutions"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Communication</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={consumerGoods}
                                            alt="Consumer browsing products on a smartphone."
                                            title="Digital Solutions for Consumer Goods"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>
                                        Consumer <br />
                                        Goods
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={travel}
                                            alt="Travelers using a mobile app to book flights and accommodation."
                                            title="Transforming Travel with Digital Technology"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Travel</h5>
                                </div>
                            </div>
                        </div>

                        <div className="industries-container">
                            <div className="service-two-item">
                                <div className="content">
                                    <div className="icon-btn">
                                        <img
                                            src={manufacturing}
                                            alt="Manufacturing plant with automated robotic arms."
                                            title="Digital Transformation in Manufacturing"
                                            className="vr"
                                        />
                                    </div>
                                    <h5>Manufacturing</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services2
