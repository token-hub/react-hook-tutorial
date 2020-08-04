import React from 'react';
import PropTypes from 'prop-types';

const HookButtonComponent = ({handleClick, children}) => {
	console.log(`rendering - incrementAge/incrementSalary`);
	return(
		<div>
			<button onClick={handleClick}>Click</button>
		</div>
	)
}

// PropTypes 
HookButtonComponent.propTypes = {
	handleClick: PropTypes.func.isRequired
}

export default React.memo(HookButtonComponent)