import React from 'react';

class ClassMouseMove extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			x: '',
			y: ''
		}
	}

	mousemove = e => {
		this.setState({
			x: e.clientX,
			y: e.clientY
		})
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.mousemove)
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.mousemove)
	}

	render(){
		return (
			<div>
				<p>X : {this.state.x} Y: {this.state.y}</p>
			</div>
		)
	}
}

export default ClassMouseMove