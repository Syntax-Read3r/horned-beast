import { Component } from "react";

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
          numOfClicks: '',
        }
    }

    handleFavorite = () => {
        this.setState({
          numOfClicks: this.state.numOfClicks + '💞',
        })
    }


  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          style={{ width: "100%" }}
          onClick={this.handleFavorite}
        />
        <p>{this.props.description}</p>
        <span>{this.state.numOfClicks}</span>
      </div>
    );
  }
}

export default HornedBeast;
