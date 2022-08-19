import "./App.css";

import React from "react";

import { Container, Card, Form, Spinner, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import {ModelClassifier} from "./ModelClassifier";
import PredictionsListView from "./PredictionsListView";
import Disclaimer from "./disclaimer/Disclaimer";

class App extends React.Component {
  
	modelClassifier = new ModelClassifier();
	
	constructor(props) {
		super(props);

		this.state = {
			isModelLoaded: false,
			imageSrc: "",
			showImagePreview: false,
			predictions: [],
		};

		this.onFileChange = this.onFileChange.bind(this);
		this.predict = this.predict.bind(this);
	}

	componentDidMount() {
		this.modelClassifier.init();
		this.setState({isModelLoaded: true});
	}

	onFileChange(event) {
		var file = event.target.files[0];
		var reader = new FileReader();
		var url = reader.readAsDataURL(file);
		
		reader.onloadend = (readerEvent) => {
			url = readerEvent.target.result;
			this.setState({
				imageSrc: url,
				showImagePreview: true
			});
			// console.log(url);
		};
	}

	async predict() {
		const img = document.getElementById('img-preview');
		const predictions = await this.modelClassifier.predict(img);
		this.setState({ predictions: predictions });
	}

	render() {
		return (
		<Container style={{marginTop: "20px"}} >

			<Disclaimer/>

			{!this.state.isModelLoaded && (
			<Card style={{ marginTop: "20px", marginBottom: "20px" }}>
				<Card.Body style={{ display: "inline-flex", alignItems: "center" }}>
				<Spinner animation="border"></Spinner>
				<span style={{ marginLeft: "10px" }}>
					Carregando o sistema...
				</span>
				</Card.Body>
			</Card>
			)}

			<Card>
				<Card.Header>
					<strong>Analisador de Raio-X</strong>
				</Card.Header>
				<Card.Body>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Escolha uma imagem de Raio-X.</Form.Label>
						<Form.Control type="file" onChange={this.onFileChange} />
					</Form.Group>

					<Button 
						variant="primary" 
						type="submit" 
						style={{marginBottom: "20px"}}
						onClick={this.predict}> Diagnosticar </Button>

					{this.state.showImagePreview && (
						<Row>
							<Col>
								<Image
									id="img-preview"
									src={this.state.imageSrc}
									rounded
									width="300"
									height="300"
								/>
							</Col>
							<Col>
							{
								this.state.predictions.length > 0 &&
								<PredictionsListView predictions={this.state.predictions} />
							}
							</Col>
							
						</Row>

					)}
				</Card.Body>
			</Card>
		</Container>
		);
	}
}

export default App;