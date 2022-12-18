import * as React from "react";
import Green from "./Green";
import Yellow from "./Yellow";
import Red from "./Red";

class TrafficLight extends React.PureComponent {
  state = {
    red: true,
    yellow: false,
    green: false,
  };

  transition = () => {
    if (this.state.red) {
      this.setState({
        red: false,
        yellow: true,
        green: false,
      });
      this.waitYellowInterval();
      return;
    }

    if (this.state.yellow) {
      this.setState({
        red: false,
        yellow: false,
        green: true,
      });
      this.waitGreenInterval();
      return;
    }

    if (this.state.green) {
      this.setState({
        red: true,
        yellow: false,
        green: false,
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
    const { green, yellow, red } = this.state;

    return (
      <div>
        <Red isOn={red} />
        <Yellow isOn={yellow} />
        <Green isOn={green} />
      </div>
    );
  }
}

export default TrafficLight;
