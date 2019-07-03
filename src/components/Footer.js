import React, { Component } from "react";
import { FaPhoneVolume } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row justify-content-center m-5 text-center">
            <div className="col-lg-5 col-md-7 col-sm-12 col-12">
              <div className="btn btn-success h3 btn-lg shadow-custom py-2 px-3">
                <a className="text-white h2" href="tel:+1-813-634-6500">
                  <FaPhoneVolume /> 813-634-6500
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Footer;
