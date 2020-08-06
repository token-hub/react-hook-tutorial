import React from 'react';

class ClassTimer extends React.Component {

	interval

	constructor(props) {
		super(props);

		this.state = {
			count: 0
		}
	}

	runTimer = () => {
		this.interval = setInterval( () => {
			this.setState( prevInterval => ( {count: prevInterval.count + 1} ) );
		}, 1000 );
	}

	componentDidMount() {
		this.runTimer()
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render(){
		return(
			<div>
				<p>Hello :D - {this.state.count}</p>
				<button onClick={ () => clearInterval(this.interval) }>Clear Interval</button>
			</div>
		)
	}
}

export default ClassTimer