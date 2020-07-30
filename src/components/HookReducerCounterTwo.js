import React, {useReducer} from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10
}

const reducer = (state, action) => {
	switch(action.type) {
		case 'increment':
			return {...state, firstCounter:  state.firstCounter + action.value}
			break;

		case 'increment2':
			return {...state, secondCounter:  state.secondCounter + action.value}
			break;

		case 'decrement':
			return {...state, firstCounter:  state.firstCounter - action.value}
			break;

		case 'decrement2':
			return {...state, secondCounter:  state.secondCounter - action.value}
			break;

		case 'reset':
			return initialState
			break;
		default:
			return state
	}
}

const HookReducerCounterTwo = () => {

	const [count, dispatch] = useReducer(reducer, initialState);

	return(
		<div>
			<p>Count: {count.firstCounter}</p>
			<p>Count: {count.secondCounter}</p>
			<button onClick={() => dispatch( {type: 'increment', value: 1} )}>Increment</button>
			<button onClick={() => dispatch( {type: 'decrement', value: 1} )}>Decrement</button>
			<button onClick={() => dispatch( {type: 'increment', value: 5} )}>Increment 5</button>
			<button onClick={() => dispatch( {type: 'decrement', value: 5} )}>Decrement 5</button>

			<button onClick={() => dispatch( {type: 'increment2', value: 7} )}>Increment2 5</button>
			<button onClick={() => dispatch( {type: 'decrement2', value: 7} )}>Decrement2 5</button>

			<button onClick={() => dispatch( {type: 'reset'} )}>Reset</button>
		</div>
	)
}

export default HookReducerCounterTwo