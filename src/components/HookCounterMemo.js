import React, {useState, useMemo} from 'react';


const HookCounterMemo = () => {

	const [countOne, setCountOne] = useState(0); 
	const [countTwo, setCountTwo] = useState(0);

	const incrementOne = () => {
		setCountOne(prevOne => prevOne + 1);
	}

	const incrementTwo = () => {
		setCountTwo(prevTwo => prevTwo + 1);
	}

	const isEven = useMemo( () => {
		let i = 1;
		while( i < 200000000) i++;
		return countOne % 2 == 0;
	}, [countOne] );

	return(
		<div>
			<div>
				<button onClick={incrementOne} >increment one : {countOne} </button>
				<span> { isEven ? 'even' : 'odd' } </span>
			</div>
			<div><button onClick={incrementTwo} >increment two : {countTwo} </button></div>
		</div>
	)
}

export default HookCounterMemo