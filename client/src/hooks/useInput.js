import { useState } from 'react';

function useInput(initValue) {
	const [ value, setValue ] = useState(initValue);

	const handleChange = event => {
		setValue(event.target.value);
	}

	const handleReset = () => {
		setValue('');
	}

	return {
		value,
		onChange: handleChange,
		onReset: handleReset
	}
}

export default useInput;
