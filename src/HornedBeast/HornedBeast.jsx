import { Component } from "react";

class HornedBeast extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          style={{ width: "20%" }}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
