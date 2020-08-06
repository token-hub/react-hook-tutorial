import React, {useEffect, useRef, useState} from 'react';

const HookTimer = () => {

	const [count, setCount] = useState(0);
	const intervalRef = useRef();

	useEffect( () => {

		intervalRef.current = setInterval( () => {
			setCount(prevCount => prevCount + 1)
		}, 1000 );

		return () => {
			clearInterval(intervalRef.current);
		}

	}, [])

	return(
		<div>
			<p>Hook Timer -  { count } </p>

			<button onClick={ () => clearInterval(intervalRef.current) }> Click </button>
		</div>
	)
}

export default HookTimer