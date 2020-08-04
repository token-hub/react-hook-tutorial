import React from 'react';
import PropTypes from 'prop-types';

const HookCountComponent = ({text, count}) => {
	
	console.log(`rendering ${count}`);

	return(
		<div>{text} - {count}</div>
	)
}

// PropTypes
HookCountComponent.propTypes = {
	text: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
}

export default React.memo(HookCountComponent)