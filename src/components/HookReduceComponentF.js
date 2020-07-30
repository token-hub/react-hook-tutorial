import React, {useContext} from 'react';
import { ReducerContext } from '../App';

const HookReduceComponentf = () => {

	const ReducerContextVar = useContext(ReducerContext);
	
	return(
		<div>
			Component F: {ReducerContextVar.reducerCount}
			<button onClick={() => ReducerContextVar.reducerDispatch( {type: 'increment'} )}>Increment</button>
			<button onClick={() => ReducerContextVar.reducerDispatch( {type: 'decrement'} )}>Decrement</button>
			<button onClick={() => ReducerContextVar.reducerDispatch( {type: 'reset'} )}>Reset</button>
		</div>
	)
}

export default HookReduceComponentf