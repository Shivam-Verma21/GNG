import React from 'react'
import "../../App.css"
import circle from "../../assets/images/circle.svg"

const About = () => {
    return (
        <div>
            <section className="about-area pt-130 rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-lg-3">
                            <div className="about-image rmb-45">
                                <img src={circle} alt="Circle Text" />
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-9">
                            <div className="about-content">
                                <div className="section-title mb-40">
                                    <span className="sub-title mb-15">About Company</span>
                                    <h2>
                                        Transforming Businesses Through Digital Innovation and Technology
                                    </h2>
                                </div>
                                <div className="content">
                                    <p>
                                        At G&G Innovations, we're dedicated to driving digital
                                        transformation through innovative technology solutions. Our expert
                                        team combines cutting-edge technology with strategic insight,
                                        offering in cloud solutions, emerging technology, and interactive
                                        design. Partner with us to navigate the digital landscape and turn
                                        your vision into reality.
                                    </p>
                                    <a className="read-more mt-10" href="">
                                        Read More 
                                        {/* <i className="far fa-arrow-right" /> */}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
