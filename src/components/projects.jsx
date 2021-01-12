import React, { Component } from 'react'

export default class Projects extends Component {

	


  render() {
    return (
      <div>
		<section className="colorlib-about" data-section="projects">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my recent projects</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Home hydroponics system</h3>
                    <img src="images/hydroponics.jpg"  width="350" height="250"/>
                    <p><br/><br/>A fully automated home hydroponics system for budding interest and spreading knowledge about the promises of hydroponics in developing countries.
					<br/><br/> The first prototype provides real-time online monitoring of metrics for optimal growth. It also automates the process of watering the plants and providing them with necessary light.
					</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>ROS based quadcopter</h3>
                    <img src="images/drone.jpg"  width="300" height="250"/>
                    <p> <br/><br/>A Robotic OS based quadcopter with camera for object detection and computer vision. Capable of reaching upto 11000rpm and 20mins of flying time.
                    <br/><br/> Upcoming- laser scanning for obstacle detection <br/><br/><br/><br/>
					</p>
                
				</div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Billiards CV application</h3>
                    <video width="350" height="250" controls autoPlay>
 								 	<source src="images/billiardscv test.mp4" type="video/mp4"/>
								</video>
                    <p>
					<br/><br/> OpenCV based Automatic Billiards score and ball tracker for real-time score and statistic caluclations. It also features a face detector for recognising players. Robust in all lighting conditions and adaptable to any pool table.
					<br/><br/> Upcoming- Best shots highlights and shot prediction <br/><br/>
					</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
				
      </div>
    )
  }
}

