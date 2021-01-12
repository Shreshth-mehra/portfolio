import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Projects from './components/projects'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Education from './components/education'
import Interests from './components/interests'
import Astronomy from './components/astronomy'
import AstronomyExtra from './components/astronomy extra'

class App extends Component {

  constructor(props) {
		super(props);
		this.handleClickAstronomy = this.handleClickAstronomy.bind(this);
		
		this.state = {astronomy: true,travelling :false,wildlife:false};
	  }

	  handleClickAstronomy() {
      if(this.state.astronomy){
    this.setState({astronomy: false,travelling :false,wildlife:false });
      }
      if(!this.state.astronomy){
        this.setState({astronomy: true,travelling :false,wildlife:false });
          }

	  }
	
	 

	  componentDidMount(){}
	  componentDidUpdatet(){}




  render() {


    let astronomyextra;
    if (this.state.astronomy) {
      astronomyextra = <AstronomyExtra />;
    } else {
      astronomyextra =  
      <section className="colorlib-work">
      <div className="row">
          <div className="col-md-12 animate-box">
            <p><a onClick={this.handleClickAstronomy} className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
          </div>
        </div>
        </section>;
    }


    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Projects></Projects>
          <Education></Education>
          <Interests></Interests>
          
         {// <Astronomy></Astronomy>
         
           // {//astronomyextra}
           }
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
