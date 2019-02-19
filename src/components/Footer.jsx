import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
       
          <div className="container-fluid footer">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <h3>
                  Follow Me on:
                  </h3>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-instagram"></a>
              </div>
              <div className="col-sm-6 col-md-4">
                <h3>Contact Me:</h3>
                <p>📞 +91-8860658702</p>
                <p>✉ vsarthak88@gmail.com</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <p>🏡 45, Ambedker Street, Maujpur, Delhi-110053.</p>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="454" height="288" id="gmap_canvas" src="https://maps.google.com/maps?q=nehru%20street%20maujpur&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net"></a></div></div>
                    
              </div>

            </div>

          </div>
      </div>

    );
  }
}
export default Footer;