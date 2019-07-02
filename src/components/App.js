import React, { Component } from "react";
import "../css/App.css";

import NavBar from "./Nav";
import Hero from "./Hero";
import Location from "./Location";
import About from "./About";
import Photo from "./Photo";
import Services from "./Services";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myService: [],
      lastIndex: 0
    };
  }
  componentDidMount() {
    fetch("./service_photo.json")
      .then(response => response.json())
      .then(result => {
        const services = result.map(item => {
          item.itemId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myService: services
        });
      });
  }

  scrollingView = e => {
    const etarget = e.target;
    const idTarget = etarget.getAttribute("alink");
    const element = document.getElementById(idTarget);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    var fixed_spacer = <div className="fixed_spacer" />;

    return (
      <main>
        <NavBar scrollingView={this.scrollingView} />
        <Hero />
        <Location
          scrollingView={this.scrollingView}
          fixed_spacer={this.fixed_spacer}
        />
        {fixed_spacer}
        <About scrollingView={this.scrollingView} />
        {fixed_spacer}
        <Photo scrollingView={this.scrollingView} />
        {fixed_spacer}

        <Services
          scrollingView={this.scrollingView}
          myService={this.state.myService}
          displayImg={this.state.displayImg}
        />
        <Footer />
      </main>
    );
  }
}
export default App;
