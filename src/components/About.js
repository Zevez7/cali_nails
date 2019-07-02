import React, { Component } from "react";
import { FaArrowUp } from "react-icons/fa";

export default class About extends Component {
  render() {
    const { scrollingView } = this.props;

    return (
      <main>
        <div className="container">
          <div className="target-shift" id="about" />
          <div className="row justify-content-center">
            <div className="col-12 text-center m-5 h1 font-weight-bold">
              ABOUT US
            </div>
            {/* return top unit */}
            <div className="col-12 text-right">
              <div
                className="return_top pointer"
                alink="home"
                onClick={e => scrollingView(e)}
              >
                <FaArrowUp /> Return Top
              </div>
            </div>
          </div>
          {/* img */}
          <div className="row justify-content-start mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
              <img
                src={require("../images/salon/salon4.jpg")}
                className="img-fluid shadow-custom mx-auto d-block photo"
                alt="Salon 4"
              />
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12 col-12 p-2 h5">
              <p>
                Kim & James, mother and son, opened Cali Nails in 2011. Their
                goal was to create a friendly nail salon that provided excellent
                nail care. Along with the other nail technicians, they hope
                everyone will stop by to enjoy a relaxing day at Cali Nail.
              </p>
              <p> Gardening is Kim's favorite hobby.</p>
              <p> James likes to read to relax. </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
