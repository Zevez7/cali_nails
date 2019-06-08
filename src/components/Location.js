/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Review from "./Review";
import calinail from "../images/calinailsmap1.png";
import { FaArrowUp } from "react-icons/fa";

export default class Location extends Component {
  render() {
    const { scrollingView } = this.props;

    return (
      <main>
        <div className="container">
          <div className="target-shift" id="location" />
          <div className="row justify-content-center">
            <div className="col-12 text-center m-5 h1 font-weight-bold">
              APPOINTMENT & WALK-IN-WELCOME
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
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 mb-3">
              <div className="h2 mt-1"> Address </div>
              <ul className="list-group shadow-custom mb-4">
                <li className="list-group-item h4">
                  5358, 1517 Sun City Center Plaza # B,
                  <br /> Sun City Center, FL 33573
                </li>
              </ul>
              <div className="h2"> Hours</div>
              <ul className="list-group shadow-custom">
                <li className="list-group-item h4">
                  OPEN: Monday - Saturday: 9am - 6pm
                </li>
                <li className="list-group-item h4">
                  CLOSED: Sunday <br />
                </li>
                <li className="list-group-item h4">
                  HOLIDAY CLOSED:
                  <ul>
                    <li>Christmas's Day</li>
                    <li>New Year's Day</li>
                    <li>Memorial Day</li>
                    <li>Easter Day</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="h2">
                Location:
                <a href="https://goo.gl/maps/ZXbgyUw6vNsvUwBHA">Google Map</a>
              </div>
              <a href="https://goo.gl/maps/ZXbgyUw6vNsvUwBHA">
                <img
                  src={calinail}
                  className="img-fluid shadow-custom map"
                  alt="Google map"
                />
              </a>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            <div className="col-12 text-center m-4 h1 font-weight-bold">
              ONLINE REVIEW
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <Review
              type="Google Review"
              quote="Excellent products and service, friendly and extreme good
                  manners your are the King or Queen. English and Spanish
                  speaker's."
              customer="Ivonnes"
            />

            <Review
              type="Google Review"
              quote="My husband and I have gone to Cali Nails for a number of
              years. We always have great pedicures from the knowledgeable
              and friendly staff. We recommend it highly."
              customer="Kathryn"
            />

            <Review
              type="Google Review"
              quote="Took my 92 year old Mom for Mother's Day. She never had a mani-pedi in her life. The staff did a great job and were kind and gentle. I would highly recommend Sun City Center Cali Nails! Chloe was fantastic!"
              customer="Wendy"
            />
          </div>
        </div>
        {/*  container */}
      </main>
    );
  }
}
