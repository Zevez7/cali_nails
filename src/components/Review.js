import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

export default class Review extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-12 py-3 mt-3 shover">
        <div className="h5">{this.props.type}</div>
        <div>
          <div className="gold-style">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <div className="text-left">
            <i>{this.props.quote}</i>
            <b>
              <br /> - {this.props.customer}
            </b>
          </div>
        </div>
      </div>
    );
  }
}
