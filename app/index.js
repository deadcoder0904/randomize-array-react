import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CopyToClipboard from 'react-copy-to-clipboard';

class RandomizeArray extends Component {
	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.shuffleArray = this.shuffleArray.bind(this)
		this.state = {
			text: '',
			arr: []
		}
	}

	shuffleArray(x) {
		let arr = [...x]
		for (let i = arr.length - 1; i > 0; i -= 1) {
		    const j = Math.floor(Math.random() * (i + 1))
		    const temp = arr[i]
		    arr[i] = arr[j]
		    arr[j] = temp
		  }
		 return arr
	}

	handleChange(e) {
		let arr = e.target.value === '' ? [] : JSON.parse(e.target.value);
		arr = JSON.stringify(this.shuffleArray(arr), undefined, 2);
		this.setState({arr})
	}

	render() {
		return (
				<div>
					<h1>RandomizeArray React</h1>
					<CopyToClipboard text={this.state.arr}>
						<button id="copy">Copy Randomized Array</button>
					</CopyToClipboard>
					<div id="app">
						<textarea id="edit" cols="30" rows="20" onChange={this.handleChange} placeholder="Enter a Valid Array"></textarea>
						<pre id="op">{this.state.arr}</pre>
					</div>
				</div>
			)
	}
}

ReactDOM.render(<RandomizeArray />, document.getElementById('app'));
