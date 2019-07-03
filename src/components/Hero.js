import React, { Component } from "react";
import { FaPhoneVolume } from "react-icons/fa";

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: require("../images/rashid-khreiss-461372-unsplash.jpg"),
      random_number: "1"
    };
    this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
  }

  /*   cali_nails\src/images/designecologist-565222-unsplash.jpg
   */

  getRandomIntInclusive() {
    const min = Math.ceil(1);
    const max = Math.floor(3);
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({
      random_number: rand
    }); //The maximum is inclusive and the minimum is inclusive
  }

  SwitchRandom(rand) {
    switch (rand) {
      case "1":
        return "bar";
      case "2":
        return "bar";
      case "3":
        return "bar";
      default:
        return "foo";
    }
  }

  render() {
    return (
      <main>
        <div
          className="container-fluid background rounded-bottom shadow-custom"
          style={{
            backgroundImage: `url(${this.state.url})`
          }}
        >
          <div className="row justify-content-end pt-5">
            <div className="col-lg-5 col-md-6 col-sm-7 col-10 right-col p-3 ml-0 rounded-left h3">
              <div className="mb-1 h5 ">
                <span className="h1 font-weight-bolder">CALI NAILS</span> <br />
                FRIENDLY & PROFESSIONAL
                <br />
              </div>
              <button type="button" className="btn btn-success .btn-lg">
                <a className="text-white h2" href="tel:+1-813-634-6500">
                  <FaPhoneVolume /> 813-634-6500
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* container */}
      </main>
    );
  }
}
