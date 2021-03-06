import { Component } from "react";
import HornedBeast from "../HornedBeast/HornedBeast";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

class Main extends Component {
  


  render() {
    return (
      <div className="main">
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.data.map((beast) => {
              return (
                <Col key={beast.id}>
                  <HornedBeast
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    selectedBeast={this.props.selectedBeast}
                    displayModal={this.props.displayModal}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
