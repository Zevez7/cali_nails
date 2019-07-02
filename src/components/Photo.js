import React, { Component } from "react";
import data_photo from "../data/data_photo.json";
import { FaArrowUp } from "react-icons/fa";

export default class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIMG: "0",
      selected_link: "0"
    };
    this.displayImg = this.displayImg.bind(this);
  }

  displayImg(e) {
    const etarget = e.target;
    const datalink = etarget.getAttribute("number");

    console.log(datalink);

    this.setState({
      photoIMG: `${datalink}`,
      selected_link: `${datalink}`
    });
  }

  render() {
    const { scrollingView } = this.props;

    const photo_map = data_photo.map(item => (
      <li key={item.number}>
        <img
          src={require(`../images/salon/${item.name}${item.number}.jpg`)}
          className={
            "thumbnail-image" +
            " " +
            (`${this.state.selected_link}` === `${item.number}`
              ? "photo-selected"
              : "")
          }
          number={item.number}
          onClick={this.displayImg}
          alt={`${item.name}${item.number}`}
        />
      </li>
    ));

    return (
      <main>
        <div className="container">
          <div className="target-shift" id="photo" />
          <div className="row justify-content-center">
            <div className="col-12 text-center m-5 h1 font-weight-bold">
              PHOTO
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

          <div className="row justify-content-center mt-4">
            <div className="col-lg-8 col-md-9 col-sm-12 col-12">
              <img
                src={require(`../images/salon/salon${this.state.photoIMG}.jpg`)}
                className="img-fluid shadow-custom mx-auto d-block photo"
                alt={`Salon ${this.state.photoIMG}`}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 thumbnail-container">
              <ul className="thumbnail-list">{photo_map}</ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
