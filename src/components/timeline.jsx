import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mechanical designer and Manufacturing co-op at WEICCO <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;September 2020 – December 2020</span><br/><h5>HVAC accessories, expansion joints and vibration isolators manufacturer</h5></h2>
                        <p>•	Designed and built a hydrostatic pressure fatigue testing machine for expansion joints according to EJMA standards
                        <br/>•	Assisted in designing and manufacturing of HVAC components including expansion joints, vibration isolators and pipe guides
                        <br/>•	Performed various quality tests including tensile, impact and fire retardation according to relevant UL, ISO or ASTM standards to comply with customers’ demands
                        <br/>•	Applied Design for manufacturing and Lean manufacturing concepts for optimal and low-cost quality manufacturing
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mechanical Product Developer at AOMS<span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;January 2020- April 2020</span><br/><h5>Industrial IoT applications</h5></h2>
                        <p>•	Responsible for full product development cycle and R&D activities for various projects based on customer’s needs 
                        <br/>•	Designed and prototyped a product, compliant with UL and CSA standards to provide power over ethernet to various outdoor IOT devices in remote locations.
                        <br/>•	Assisted in building of a corrosion chamber to research measuring of corrosion using optical fiber sensors
                        <br/>•	Designed a stress relief shell to allow vertical installation of multipoint sensors by reducing load on connection points. The design was made keeping in mind efficient mass manufacturing using injection molding  
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Electro-Mechanical designer at Waterloop<span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;January 2019- March 2020</span><br/><h5>Student led design team competitng in the SpaceX Hyperloop pod competition</h5></h2>
                        <p>
                        <br/>•	Designed an internally pressurized battery enclosure using SolidWorks for use in vacuum environment
                        <br/>•	Performed FEA on the battery enclosure maintaining a safety factor of 6 to comply with the competition rules
                        <br/>•	Designed a gasket for the pressure vessel and documented the formal procedure on initial bolt load and bolt spacing 
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
