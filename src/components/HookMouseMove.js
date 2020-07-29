import React, {useState, useEffect} from 'react';

const HookMouseMove = () => {

	// const [x, setX] = useState(0)
	// const [y, setY] = useState(0)

	// const logmouseposition = e => {
	// 	setX(e.clientX)
	// 	setY(e.clientY)
	// }
	
	const [coordinates, setCoordinates] = useState({x: '', y: ''})

	const logmouseposition = e => {
		setCoordinates({x: e.clientX, y: e.clientY});
	}

	useEffect( () => {
		console.log('mousemoveeeee!');
		window.addEventListener('mousemove', logmouseposition)

		return () => {
			console.log(' component unmounted ');
			window.removeEventListener('mousemove', logmouseposition)
		}
	}, [] )

	return (
		<div>
			<p> X : {coordinates.x} Y : {coordinates.y} </p>
		</div>
	)
}

export default HookMouseMove 