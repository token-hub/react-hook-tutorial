import React, {useState, useCallback} from 'react';
import HookTitleComponent from './HookTitleComponent';
import HookCountComponent from './HookCountComponent';
import HookButtonComponent from './HookButtonComponent';

const HookParentCompoent = () => {
	
	const [age, setAge] = useState(25);
	const [salary, setSalary] = useState(50000);

	// use useCallback function if 
	// you are passing callback to an optimized child component (React.memo)
	// And if the callback functions you are passing is to child component is identical 

	const incrementAge = useCallback( () => {
		setAge(prevAge => prevAge + 1) ;
	}, [age] );

	const incrementSalary = useCallback( () => {
		setSalary(prevSalary => prevSalary + 1000);
	}, [salary] );

	return(
		<div>
			<HookTitleComponent /> 
			<HookCountComponent  text="Age" count={age} /> 
			<HookButtonComponent handleClick={incrementAge} /> 
			<HookCountComponent text="Salary" count={salary}/> 
			<HookButtonComponent  handleClick={incrementSalary}/> 
		</div>
	)
}

export default HookParentCompoent