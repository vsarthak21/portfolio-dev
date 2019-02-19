import React, { Component } from "react";
import './Home.css';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            SV
            </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Porfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Poems</a>
              </li>

            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><img className="img-fluid gmailIcon" src="http://cdn.iphonehacks.com/wp-content/uploads/2018/04/gmail-logo-1024x776.png" alt="" /></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
