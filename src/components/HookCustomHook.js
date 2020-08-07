import React, {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const HookCustomHook = () => {
	
	const [count, setCount] = useState(0);

	useDocumentTitle(count);

	return(
		<div>
			<p>Count { count }</p>
			<button onClick={ () => setCount( prevCount => prevCount + 1 ) }> Click </button>
		</div>
	)
}

export default HookCustomHook
