import React from "react";

import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'

class PredictionsListView extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			predictions: props.predictions,
		};
	}

	buildList(items) {
		return items.map((item) => this.buildItem(item));
	}

	buildItem(item) {
		if (item.probability < 0.1 && item.probability > 0) {
			item.probability = 0.1;
		}

		return (
			<ListGroup.Item key={item.name}>
				{item.name} - Probabilidade: { Math.round((item.probability + Number.EPSILON) * 100) / 100  } %
				<ProgressBar striped variant="success" now={item.probability} />
			</ListGroup.Item>
		);
	}

	render() {
		return (
			<ListGroup>
				{this.buildList(this.state.predictions)}
			</ListGroup>
		);
	}
}

export default PredictionsListView;