import React from 'react'
import "../../App.css"
import innovation from "../../assets/images/services1/Innovation.png"
import car from "../../assets/images/services1/car.png"
import user from "../../assets/images/services1/user.png"

const Services1 = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <section className="service-one-area pt-70 rpt-40 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title mb-20">Why Choose Us</span>
                                <h2>Discover the advantages of partnering with us</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="service-one-item">
                                <div className="title-icon">
                                    <h5>
                                        Innovative <br />
                                        Solutions
                                    </h5>
                                    <img
                                        src={innovation}
                                        alt="Emerging Technologies with G&G Innovations"
                                        title="Innovative Technology Solutions | ML, VR, AR & Web 3.0 with G&G Innovations"
                                        data-description="Delivering state-of-the-art technology solutions that drive tangible business results."
                                        className="vr"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        We leverage the latest technologies to deliver state-of-the-art
                                        solutions that drive tangible results for your business.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div className="service-one-item">
                                <div className="title-icon">
                                    <h5>
                                        Customized <br />
                                        Approach
                                    </h5>
                                    <img
                                        src={user}
                                        alt="Customized solutions for business needs"
                                        title="Tailored Solutions for Your Business"
                                        data-description="Our solutions are tailored to meet your specific business needs, ensuring personalized attention and outcomes that align with your objectives."
                                        className="vr"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        Our solutions are tailored to meet your specific business needs,
                                        ensuring that you receive personalized attention and outcomes that
                                        align with your objectives.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div className="service-one-item">
                                <div className="title-icon">
                                    <h5>
                                        Expert <br />
                                        Team
                                    </h5>
                                    <img
                                        src={car}
                                        alt="G&G Innovations team of experts"
                                        title="Our Expert Team of G&G Innovations"
                                        data-description="Meet the seasoned professionals who bring extensive experience and expertise to every project, ensuring excellence at every stage."
                                        className="vr"
                                    />
                                </div>
                                <div className="content">
                                    <p>
                                        With a team of seasoned professionals bringing extensive
                                        experience and expertise to every project, you can trust us to
                                        deliver excellence at every stage of the process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services1
