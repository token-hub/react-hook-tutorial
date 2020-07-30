import React, {useContext} from 'react';
import { ReducerContext } from '../App';

const HookReduceComponentD = () => {

	const ReducerContextVar = useContext(ReducerContext);

	return(
		<div>
			Component D: {ReducerContextVar.reducerCount}
			<button onClick={() => ReducerContextVar.reducerDispatch( {type: 'increment'} )}>Increment</button>
			<button onClick={() => ReducerContextVar.reducerDispatch(	{type: 'decrement'} )}>Decrement</button>
			<button onClick={() => ReducerContextVar.reducerDispatch(	 {type: 'reset'} )}>Reset</button>
		</div>
	)
}

export default HookReduceComponentD