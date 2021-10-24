import React, { Component } from "react";
import FComponent from "./FComponent.js";

export default class Ccomponent extends Component {
	
	constructor(props){

		super(props)

		this.state = {
			count: 0,
			array: []
		}

		this.addElement = this.addElement.bind(this);
		this.deleteElement = this.deleteElement.bind(this);
	}

	addElement(){
		this.setState({
			count: this.state.count + 1,
			array: this.state.array.concat(["1"])
		})
	}

	deleteElement(){
		this.setState({
			count: this.state.count + 1,
			array: this.state.array.filter((element, index) => index < this.state.array.length - 1)
		})
	}

	renderList() {
      return this.state.array.map((item) => {
         return <FComponent elem={item}/>
      })
   }

	render() {
		return (
			<div>
				<h3>Array length: {this.state.array.length}</h3>
				<div className="output-box"> { this.renderList() } </div>
				<button onClick={this.addElement}>Add element</button>
				<button onClick={this.deleteElement}>Delete element</button>
				<h3>Total clicks: {this.state.count}</h3>
			</div>
		);
	}
}