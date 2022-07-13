import "./App.css";
import { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import SelectedBeast from "./SelectedBesast/SelectedBeast";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeast: data,
      selectedBeast: null,
      displayAsModal: false,
    };
  }

  displayModal = (name) => {
    console.log("Show");
    const selectedBeast = data.beasts.find((beast) => beast.name === name);
    this.setState({
      selectedBeast,
      displayModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      displayModal: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          data={this.state.allBeast}
          allBeasts={this.state.allBeast}
          displayModal={this.displayModal}
          selectedBeast={this.state.selectedBeast}
        />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.displayAsModal}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    );
  }
}
