import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    const { scrollingView } = this.props;

    return (
      <main>
        <div id="home" />
        <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-custom font-weight-bold fixed-top">
          <div
            className="h3 p-0 m-0 pointer home"
            alink="home"
            onClick={e => scrollingView(e)}
          >
            CALI NAILS
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse pl-2 pt-1" id="navbarNav">
            <ul className="navbar-nav ">
              <li
                className="nav-item nav-link pointer"
                alink="location"
                onClick={e => scrollingView(e)}
              >
                LOCATION
              </li>
              <li
                className="nav-item nav-link pointer text-nowrap"
                alink="about"
                onClick={e => scrollingView(e)}
              >
                ABOUT US
              </li>
              <li
                className="nav-item nav-link pointer"
                alink="photo"
                onClick={e => scrollingView(e)}
              >
                PHOTO
              </li>
              <li
                className="nav-item nav-link pointer"
                alink="service"
                onClick={e => scrollingView(e)}
              >
                SERVICES
              </li>
              <li className="nav-item">
                <span className="nav-link number active">
                  <div className="phone-number text-nowrap">
                    <a href="tel:+1-813-634-6500"> 813-634-6500 </a>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </main>
    );
  }
}
