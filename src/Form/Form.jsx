import Form from "react-bootstrap/Form";
import { Component } from "react";

export default class FormSelects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			horn: null,
		};
	}


	render() {
		return (
            <Form>
			<Form.Group controlId="controlSelect">
				<Form.Label>How Many Horns</Form.Label>
				<Form.Control as="select" onChange={this.props.handleHorns}>
					<option value="">All</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
                    <option value='4'>Four horns and above</option>
				</Form.Control>
			</Form.Group>
            </Form>
		);
	}
}
