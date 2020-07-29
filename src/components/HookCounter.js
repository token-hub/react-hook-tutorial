import React, {useState, useEffect} from 'react';

const HookCounter = () => {
	
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')

	const clickHandler = () => {
		setCount(count + 1);
	}

	useEffect(() => {
		console.log('papamo')
		document.title = `You clicked ${count} times bitch!`
	}, [count]) // if the second parameter changes this method will execute

	return(
		<div>
			<input type="text" name="" onChange={ e => setName( e.target.value ) } id=""/>
			<button onClick={clickHandler}>Hook count {count}</button>
		</div>
	)
}

export default HookCounter