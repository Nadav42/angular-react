import { Component, AfterViewInit } from '@angular/core';

import * as React from "react"
import * as ReactDOM from 'react-dom';

import Button from './react/button';

let reactContainerId = "react-demo-app"

@Component({
  selector: 'react-app',
  template: `<div id="${reactContainerId}"></div>`
})
export class ReactContainerComponent {
  title = 'angular-react';

  testClickCallback(data) {
    console.log("angular recived click", data);
  }

  ngAfterViewInit() {
    ReactDOM.render(<Button startingValue={5} text={"Clicks: "} clickCallback={this.testClickCallback} />, document.querySelector(`#${reactContainerId}`))
  }
}
