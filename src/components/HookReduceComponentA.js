import React, {useContext} from 'react';
import { ReducerContext } from '../App';

const HookReduceComponentA = () => {

	const ReducerContextVar = useContext(ReducerContext);

	return(
		<div>
			Component A - Count : {ReducerContextVar.reducerCount}
			<button onClick={() => ReducerContextVar.reducerDispatch( {type: 'increment'} )}>Increment</button>
			<button onClick={() => ReducerContextVar.reducerDispatch(	{type: 'decrement'} )}>Decrement</button>
			<button onClick={() => ReducerContextVar.reducerDispatch(	 {type: 'reset'} )}>Reset</button>
		</div>
	)
}

export default HookReduceComponentA