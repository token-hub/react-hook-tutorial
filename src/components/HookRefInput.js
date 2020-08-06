import React, {useEffect, useRef} from 'react';

const HookRefInput = () => {

	const inputRef = useRef(null);

	useEffect( () => {
		inputRef.current.focus();
	}, [] );

	return(
		<div>
			<input type="text" value={``} ref={inputRef} />
		</div>
	)
}

export default HookRefInput