import * as tf from '@tensorflow/tfjs';

const MODEL_CLASSES = [
	"Atelectasis",
	"COVID-19",
	"Cardiomegaly",
	"Consolidation",
	"Edema",
	"Effusion",
	"Emphysema",
	"Infiltration",
	"Mass",
	"Nodule",
	"Pleural Thickening",
	"Pneumothorax"
];

class ModelClassifier {
	
	MODEL_CLASSES = [
		"Atelectasis",
		"COVID-19",
		"Cardiomegaly",
		"Consolidation",
		"Edema",
		"Effusion",
		"Emphysema",
		"Infiltration",
		"Mass",
		"Nodule",
		"Pleural Thickening",
		"Pneumothorax"
	];

	model = null;

	async init() {
		// this.model = await tf.loadLayersModel('https://pneumonia-model.nyc3.digitaloceanspaces.com/model.json');
		this.model = await tf.loadLayersModel('https://model.samuelfreitas.com.br/model.json');
		console.log("Model loaded.");
	}

	async predict(img) {
		const grayscale = tf.browser
			.fromPixels(img)
			.resizeNearestNeighbor([224, 224])
			.mean(2)
			.toFloat()
			.expandDims(-1)
			.reshape([1, 224, 224, 1]);
		
		// Classify the image.
		const predictions = await this.model.predict(grayscale).data();
		// const predictions = await this.model.predict(grayscale);
		// console.log('Predictions');
		// console.log(predictions);
		
		const classNames = this.getClassNames(predictions);
		// classNames.forEach(item => console.log(item.toLabel));

		return classNames;
	}
	
	getClassNames(predictions) {
		return Array.from(predictions)
			.map(function (p, i) {
				return {
					name: MODEL_CLASSES[i],
					probability: (p * 100),
					toLabel: MODEL_CLASSES[i] + ": " + (p * 100) + "%",
				}
			}).sort(function (a, b) {
				return b.probability - a.probability;
			}).slice(0, 3);
	}
}

class ModelPrediction {
	name = '';
	probability = 0.0;
	
	constructor(name, probability) {
		this.name = name;
		this.probability = probability;
	}
	
	toString(){
		return this.name + ": " + this.probability + "%";
	}
}

export {ModelClassifier, ModelPrediction, MODEL_CLASSES};