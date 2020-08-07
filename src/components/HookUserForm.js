import React, {useState} from 'react';
import useInput from '../hooks/useInput';


const HookUserForm = () => {

	const [firstname, bindFirstname, resetFirstname] = useInput('');
	const [lastname, bindLastname, resetLastname] = useInput('');

	const submitHandler = event => {
		event.preventDefault();

		console.log(`firstname: ${firstname} | lastname: ${lastname}`);
		resetFirstname();
		resetLastname();
	}

	return(
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="">Firstname</label>
					<input type="text" {...bindFirstname} />
				</div>
				<div>
					<label htmlFor="">Lastname</label>
					<input type="text" {...bindLastname} />
				</div>
				<div>
					<button type='submit'> Submit </button>
				</div>
			</form>
		</div>
	)
}

export default HookUserForm