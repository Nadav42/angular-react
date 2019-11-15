import { Component, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

var React = require('react');
var ReactDOM = require('react-dom');

import Button from './react/button';

let reactContainerId = "react-buton-demo"
let GENERATED_SEQUENCE_ID = 1;

@Component({
	selector: 'react-button',
	template: `<div id="${reactContainerId}-{{reactSequenceId}}"></div>`
})
export class ReactContainerComponent {
	title = 'angular-react';

	reactSequenceId: number;

	constructor() {
		this.reactSequenceId = GENERATED_SEQUENCE_ID;
		GENERATED_SEQUENCE_ID = GENERATED_SEQUENCE_ID + 1;
	}

	testClickCallback(data) {
		console.log("angular recived click", data);
	}

	loadReact() {
		let reactContainerElement = document.querySelector(`#${reactContainerId}-${this.reactSequenceId}`);
		console.log(reactContainerElement);

		if (reactContainerElement) {
			ReactDOM.render(<Button startingValue={5} text={"Clicks: "} clickCallback={this.testClickCallback} />, reactContainerElement)
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		// if angular inputs change
		this.loadReact();
	}

	ngAfterViewInit() {
		this.loadReact();
	}
}


