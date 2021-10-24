import React, { Component } from "react";

export default class Ccomponent extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			string: "Hello, world!",
			count: 0
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			string: this.state.string + " Click!",
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.string}</h1>
				<button onClick={this.handleClick}>Click</button>
				<h3>Counter: {this.state.count}</h3>
			</div>
		);
	}
}