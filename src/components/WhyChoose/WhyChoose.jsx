import React from 'react'
import whyChooseImg from "../../assets/images/why-choose.png"

const WhyChoose = () => {
    return (
        <div>
            <section className="why-choose-area pt-90 rpt-60 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-11 col-12">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title mb-20">Our Approach</span>
                                <h2>
                                    We follow a collaborative approach to ensure the success of every
                                    project
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="why-choose-left-image image-container">
                                <img
                                    src={whyChooseImg}
                                    alt="We discuss the business needs with dedicated team"
                                    title="Understanding Your Business Needs"
                                    className="image-contain"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 approch-banner">
                            <div className="why-choose-item-two">
                                <div className="icon">
                                    <i className="fas fa-check" />
                                    <span className="icon-bottom-shape" />
                                </div>
                                <div className="content">
                                    <h4>Discovery Phase</h4>
                                    <p>
                                        We begin by understanding your business goals, challenges, and
                                        requirements through in-depth discussions and analysis.
                                    </p>
                                </div>
                            </div>
                            <div className="why-choose-item-two">
                                <div className="icon">
                                    <i className="fas fa-check" />
                                    <span className="icon-bottom-shape" />
                                </div>
                                <div className="content">
                                    <h4>Solutions Design</h4>
                                    <p>
                                        Based on the insights gathered, we design customized solutions
                                        that address your specific needs and objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="why-choose-item-two">
                                <div className="icon">
                                    <i className="fas fa-check" />
                                    <span className="icon-bottom-shape" />
                                </div>
                                <div className="content">
                                    <h4>Development and Implementation</h4>
                                    <p>
                                        Our expert team then proceeds with the development and
                                        implementation phase, ensuring seamless integration and deployment
                                        of the solution.
                                    </p>
                                </div>
                            </div>
                            <div className="why-choose-item-two">
                                <div className="icon">
                                    <i className="fas fa-check" />
                                </div>
                                <div className="content">
                                    <h4>Testing and Quality Assurance</h4>
                                    <p>
                                        Rigorous testing and quality assurance processes are carried out
                                        to ensure that the solution meets the highest standards of
                                        performance and reliability.
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

export default WhyChoose
