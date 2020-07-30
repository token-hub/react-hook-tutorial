import React, {useReducer} from 'react';

const initialState = 0;

const reducer = (state, action) => {
	switch(action) {
		case 'increment':
			return state + 1;
			break;
		case 'decrement':
			return state - 1;
			break;
		case 'reset':
			return state = 0;
			break;
		default:
			return state;
	}
}

const HookReducerCounterThree = () => {

	const [count, dispatch] = useReducer(reducer, initialState);
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

	return(
		<div>
			<div>
				<p>Count one: {count}</p>
				<button onClick={() => dispatch('increment')}>Increment</button>
				<button onClick={() => dispatch('decrement')}>Decrement</button>
				<button onClick={() => dispatch('reset')}>Reset</button>
			</div>

			<div>
				<p>Count Two: {countTwo}</p>
				<button onClick={() => dispatchTwo('increment')}>Increment</button>
				<button onClick={() => dispatchTwo('decrement')}>Decrement</button>
				<button onClick={() => dispatchTwo('reset')}>Reset</button>
			</div>
		</div>
	)
}

export default HookReducerCounterThree