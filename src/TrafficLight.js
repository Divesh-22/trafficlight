import React, { useState } from "react";
import Green from "./Green";
import Yellow from "./Yellow";
import Red from "./Red";

class TrafficLight extends React.PureComponent {
  state = {
    red: true,
    yellow: false,
    green: false,
    imageUrl: "",
  };

  reset = (color) => {
    console.log("clicked");
    if (color == "red") {
      this.setState({
        red: true,
        yellow: false,
        green: false,
        imageUrl: "https://img.icons8.com/color/48/null/stop-sign.png",
      });
    } else if (color == "yellow") {
      this.setState({
        red: false,
        yellow: true,
        green: false,
        imageUrl:
          "https://img.icons8.com/emoji/48/null/yellow-circle-emoji.png",
      });
    } else if (color == "green") {
      this.setState({
        red: false,
        yellow: false,
        green: true,
        imageUrl: "https://img.icons8.com/fluency/48/null/go.png",
      });
    }
  };

  transition = () => {
    if (this.state.red) {
      this.setState({
        red: false,
        yellow: true,
        green: false,
        imageUrl:
          "https://img.icons8.com/emoji/48/null/yellow-circle-emoji.png",
      });
      this.waitYellowInterval();
      return;
    }

    if (this.state.yellow) {
      this.setState({
        red: false,
        yellow: false,
        green: true,
        imageUrl: "https://img.icons8.com/fluency/48/null/go.png",
      });
      this.waitGreenInterval();
      return;
    }

    if (this.state.green) {
      this.setState({
        red: true,
        yellow: false,
        green: false,
        imageUrl: "https://img.icons8.com/color/48/null/stop-sign.png",
      });
      this.waitRedInterval();
      return;
    }
  };

  waitRedInterval() {
    setTimeout(this.transition, 6000);
  }

  waitYellowInterval() {
    setTimeout(this.transition, 3000);
  }

  waitGreenInterval() {
    setTimeout(this.transition, 12000);
  }

  componentDidMount() {
    this.waitRedInterval();
  }

  render() {
    const { green, yellow, red, imageUrl } = this.state;

    return (
      <div>
        <div className="lightBox">
          <div
            onClick={() => {
              this.reset("red");
            }}
          >
            <Red isOn={red} />
          </div>
          <div
            onClick={() => {
              this.reset("yellow");
            }}
          >
            <Yellow isOn={yellow} />
          </div>
          <div
            onClick={() => {
              this.reset("green");
            }}
          >
            <Green isOn={green} />
          </div>
        </div>
        <div>
          <img src={imageUrl} />
        </div>
      </div>
    );
  }
}

export default TrafficLight;
