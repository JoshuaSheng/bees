import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>About Bee Blooms</h2>

            <p>{bio}</p>
            <div className="row">
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
