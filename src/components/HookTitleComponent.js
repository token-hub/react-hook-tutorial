import React from 'react';

const HookTitleComponent = () => {
	console.log(`rendering title`);
	return(
		<h2>Use Callback Hook</h2>
	)
}

export default React.memo(HookTitleComponent)