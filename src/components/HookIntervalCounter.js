import React, {useState, useEffect} from 'react';

const HookIntervalCounter = () => {

	const [timer, setTimer] = useState(0);

	const tick = () => {
		setTimer(prevState => prevState + 1);
	}

	useEffect( () => {
		const timer = setInterval( tick , 1000)

		return () => {
			clearInterval(timer)
		}
	}, [] )

	return (
		<div>
			<p>HookIntervalCounter : {timer}</p>
		</div>
	)
}

export default HookIntervalCounter