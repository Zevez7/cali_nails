import React, { Component } from "react";
import data_all_services from "../data/data_all_services.json";
import { FaArrowUp } from "react-icons/fa";

export default class Services extends Component {
  constructor() {
    super();

    this.state = {
      serviceImg: "fullset-min",
      selected_link: "fullset-min",
      splicenumber: data_all_services.length / 2
    };
    this.displayImg = this.displayImg.bind(this);
  }

  displayImg(e) {
    const etarget = e.target;
    const datalink = etarget.getAttribute("link");

    this.setState({
      serviceImg: `${datalink}`,
      selected_link: `${datalink}`
    });
  }

  render() {
    const { scrollingView } = this.props;

    const li_map = this.props.myService.map(item => (
      <li
        className={
          "list-group-item alink-mimic " +
          (`${this.state.selected_link}` === `${item.link}` ? "active-img" : "")
        }
        link={item.link}
        key={item.itemId}
        onClick={this.displayImg}
      >
        {item.name.toUpperCase()}
      </li>
    ));

    const all_services_map1 = data_all_services
      .map(item => (
        <li className="list-group-item extra pl-4" key={item.number}>
          {item.name.toUpperCase()}
        </li>
      ))
      .splice(0, this.state.splicenumber);

    const all_services_map2 = data_all_services
      .map(item => (
        <li className="list-group-item extra pl-4" key={item.number}>
          {item.name.toUpperCase()}
        </li>
      ))
      .splice(this.state.splicenumber);

    return (
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="target-shift" id="service" />
            <div className="col-12 text-center m-5 h1 font-weight-bold">
              SERVICES
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
          {/* photo-link */}
          <div className="row justify-content-center p-4">
            <div className="col-lg-4 col-md-5 col-sm-11 col-11 pb-3">
              <ul className="list-group list-group-flush shadow-custom">
                {li_map}
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-12 img-container">
              <img
                src={require(`../images/services/${this.state.serviceImg}.jpg`)}
                className="img-fluid service shadow-custom mx-auto d-block"
                alt="Service"
              />
            </div>
          </div>
          {/* Extra-Services */}
          <div className="row justify-content-center p-4 service-list">
            <div className="col 6">
              <ul className="list-group list-group-flush border ">
                {all_services_map1}
              </ul>
            </div>
            <div className="col 6">
              <ul className="list-group list-group-flush border ">
                {all_services_map2}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
