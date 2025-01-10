import React from 'react'
import "../../App.css"
import image from "../../assets/images/what-we-do.png"

const What_we_do = () => {
  return (
    <div>
      <section className="what-we-do-area pt-70 rpt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-7 padding-right-lg-48">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Our Services</span>
                  <h5>
                    Explore our comprehensive range of services designed to meet your
                    evolving business needs.
                  </h5>
                </div>
                
                <div className="what-we-do-item">
                  <div className="number2">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Enterprise Software Solutions</h5>
                    <p>
                      We provide solutions, from ERP and CRM to custom software, to
                      streamline and enhance your business.
                    </p>
                  </div>
                </div>

                <div className="what-we-do-item">
                  <div className="number2">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>Emerging Technologies</h5>
                    <p>
                      Leverage AI, ML, Blockchain, Smart Contracts, Web 3.0, Crypto,
                      and NFTs to drive innovation and unlock new possibilities.
                    </p>
                  </div>
                </div>

                <div className="what-we-do-item">
                  <div className="number2">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>Interactive Technologies</h5>
                    <p>
                      Engage your audience with Extended Reality (XR) solutions—AR,
                      VR, and MR—plus Metaverse consulting, game design, and
                      development.
                    </p>
                  </div>
                </div>

                <div className="what-we-do-item">
                  <div className="number2">
                    <span>04</span>
                  </div>
                  <div className="content">
                    <h5>Digital Experience Solutions</h5>
                    <p>
                      Enhance your digital presence with our UI/UX design, web and app
                      development, e-commerce, and digital marketing services for
                      standout customer experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-5">
              <div className="what-we-do-image">
                <img
                  src={image}
                  alt="G&G Provides Innovative solutions"
                  title="Empowering Businesses with Innovative Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default What_we_do
