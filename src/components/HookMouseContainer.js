import React, {useState, useEffect} from 'react';
import HookMouseMove from './HookMouseMove';

function HookMouseContainer() {

	const [display, setDisplay] = useState(true)

	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle Display</button>
			{display && <HookMouseMove />}
		</div>
	)
}

export default HookMouseContainer