import React from 'react';

class ClassCounterOne extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			name: ''
		}
	}

	componentDidMount() {
		document.title = `You clicked ${this.state.count} times`;
	}

	componentDidUpdate(prevProps, prevState) {
		if ( prevState.count !== this.state.count) {
			console.log('component updated');
			document.title = `You clicked ${this.state.count} times`;
		}
	}

	clickHandler = () => {
		this.setState(prevState => {
			return { count: prevState.count + 1}
		})
	}

	nameChangeHandler = event => {
		this.setState({
			name: event.target.value
		})
	}

	render() {
		return(
			<div>
				<p> Hello Class counter one</p>
				<button onClick={this.clickHandler}> Click {this.state.count}</button>
				<input type="text" name="name" onChange={this.nameChangeHandler} value={this.state.name} id=""/>
			</div>
		)
	}
}

export default ClassCounterOne