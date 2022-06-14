import React, { Component } from 'react';
import "./About.css";
import testimage from "../assets/test-image.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
            <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={testimage}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Dillon Ormond!</div>
              <div className="brief_description">
                <p>

                </p>
              </div>
            </div>
          </div>
  </div>
      </div>
    )
  }
}