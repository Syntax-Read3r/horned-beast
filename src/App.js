import "./App.css";
import { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import SelectedBeast from "./SelectedBesast/SelectedBeast";
import FormSelects from "./Form/Form";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allBeast: data,
			selectedBeast: {},
			displayAsModal: false,
		};
	}

	handleHorn = (e) => {
		let test = data.filter((beast) => beast.horns === parseInt(e.target.value));
		if (e.target.value === "") {
			this.setState({
				allBeast: data,
			});
		} else if (e.target.value === "4") {
			let fourA = data.filter((beast) => beast.horns >= 4);
			this.setState({
				allBeast: fourA,
			});
		} else {
			this.setState({
				allBeast: test,
			});
		}
	};

	displayModal = (name) => {
		console.log("Show");
		const selectedBeast = data.find((beast) => {
			return beast.title === name;
		});
		// const selectedBeast = data.find((beast) => beast.title === name);
		this.setState({
			selectedBeast,
			displayAsModal: true,
		});
	};

	handleClose = () => {
		this.setState({
			displayAsModal: false,
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<FormSelects handleHorns={this.handleHorn} />
				<Main
					data={this.state.allBeast}
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
