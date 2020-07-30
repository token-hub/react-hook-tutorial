import React from 'react';

class ClassIntervalCounter extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			interval: 0
		}
	}

	componentDidMount() {
		this.timer = setInterval( this.changeStateInterval, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	changeStateInterval = () => {
		this.setState( prevState => { 
			return {  interval: prevState.interval + 1 }
		 } )
	}

	render() {
		return (
			<p>Interval : {this.state.interval}</p>
		)
	}
}

export default ClassIntervalCounter