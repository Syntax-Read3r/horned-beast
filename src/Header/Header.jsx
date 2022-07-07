import { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSwitch: true,
    };
  }

  changeHeaderColor = () => {
    //do something
    this.setState({ colorSwitch: !this.state.colorSwitch });
  };

  render() {
    return (
      <header onClick={this.changeHeaderColor}>
        {this.state.colorSwitch ? (
          <h1 className="purpleHeader">Header</h1>
        ) : (
          <h1 className="blueHeader">Header</h1>
        )}
      </header>
    );
  }
}

export default Header;
