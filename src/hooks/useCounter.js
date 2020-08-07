import {useState} from 'react';

const useCounter = (initialValue, value) => {
	const [count, setCount] = useState(initialValue = 0, value);

	const increment = () => {
		setCount( prevCount => prevCount + value );
	}

	const decrement = () => {
		setCount( prevCount => prevCount - value );
	}

	const reset = () => {
		setCount(initialValue);
	}

	return [count, increment, decrement, reset];
}

export default useCounter