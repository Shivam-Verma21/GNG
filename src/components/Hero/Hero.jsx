import React from 'react'
import "../../App.css"
import heroBg from "../../assets/images/hero-bg.png"
import heroRight from "../../assets/images/hero-right.png"
import bgvideo from "../../assets/videos/bg-video.mp4"

const Hero = () => {
    return (
        <div>
            <section className="hero-area pt-185 rpt-150 rel z-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h1>
                                    Innovating <br />
                                    <span>digital </span> <i>landscapes</i>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hero-right-image mt-20">
                                <img src={heroRight} alt="Hero" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="hero-bottom-image">
                        <div className="video-container">
                            <video preload='auto' autoPlay loop muted style={{ width: '100%', height: '100%' }}>
                                <source src={bgvideo} type='video/mp4'/>
                            </video>
                        </div>
                        <div className="hero-social">
                            <a
                                href=""
                                target="_blank"
                            >
                                <i className="fab fa-facebook-f" /> <span>Facebook</span>
                            </a>
                            <a
                                href=""
                                target="_blank"
                            >
                                <i className="fab fa-linkedin-in" /> <span>Linkedin</span>
                            </a>
                            <a href="" target="_blank">
                                <i className="fab fa-instagram" /> <span>Instagram</span>
                            </a>
                            <a className="a-icon cursor">
                                <i className="fab fa-youtube" /> <span>Youtube</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-bg">
                    <img src={heroBg} alt="lines" />
                </div>
            </section>
        </div>
    )
}

export default Hero
