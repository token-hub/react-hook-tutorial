import React, {useContext} from 'react';
import { UserContext } from '../App';

const ComponentF = () => {

	const user = useContext(UserContext);

	return(
		<div>
			<p>Component F : {user}</p>
		</div>
	)
}

export default ComponentF