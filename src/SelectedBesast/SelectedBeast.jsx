import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card bg="dark" text="light" onClick={this.props.displayAsModal}>
              <Card.Img
                variant="top"
                alt={this.props.selectedBeast.title}
                src={this.props.selectedBeast.image_url}
              />
              <Card.Body>
                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                <Card.Text>{this.props.selectedBeast.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}
