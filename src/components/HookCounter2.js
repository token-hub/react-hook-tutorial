import React, {useState} from 'react';

const HookCounter2 = () => {

	const [count, setCount] = useState(0);

	return(
		<div>
			<p>Count {count}</p>
			<button onClick={ () => setCount(0) }>Reset</button>
			<button onClick={ () => setCount( prevCount => prevCount + 1 ) }>Increment</button>
			<button onClick={ () => setCount( prevCount => prevCount - 1 )}>Decrement</button>
		</div>
	)
}

export default HookCounter2

// import React from 'react';

// class HookCounter2 extends React.Component {
	
// 	constructor(props){
// 		super(props)

// 		this.state = {
// 			count: 0
// 		}
// 	}

// 	resetHandler = () => {
// 		this.setState({
// 			count: 0
// 		})
// 	}

// 	incrementHandler = () => {
// 		this.setState( prevState => {
// 			return { count: prevState.count + 1 }
// 		} )
// 	}

// 	decrementHandler = () => {
// 		this.setState( prevState => {
// 			return { count: prevState.count - 1 }
// 		})
// 	}

// 	render() {
// 		return(
// 			<div>
// 				<p>County {this.state.count}</p>
// 				<button onClick={this.resetHandler}>Reset</button>
// 				<button onClick={this.incrementHandler}>Increment</button>
// 				<button onClick={this.decrementHandler}>Decrement</button>
// 			</div>
// 		)
// 	}
// }

// export default HookCounter2