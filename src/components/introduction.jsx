import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/c4.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hello!<br/> I'm Shreshth <br /> </h1>
                          <h2>Engineer by mind<br/>Nature lover by heart<br/>Athlete by choice<br/></h2>
                          <p><a className="btn btn-primary btn-learn" href="https://1drv.ms/b/s!Aspgd-Wz1OZqnOYvJNjBRbp5RvDyFA?e=qgna6P" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
  
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
