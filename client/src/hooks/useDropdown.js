import { useState, useEffect, useRef } from 'react';

function useDropdown(initValue) {
	const [ open, setOpen ] = useState(initValue);
	const dropRef = useRef(null);

	useEffect(() => {
		const handleCloseOutside = (event) => {
			if(dropRef.current && !dropRef.current.contains(event.target) && open) {
				setOpen(false);
			}
		}

		document.addEventListener('click', handleCloseOutside);

		return () => {
			document.addEventListener('click', handleCloseOutside)
		};
	});

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return {
		open,
		dropRef,
		onOpen: handleOpen,
		onClose: handleClose
	}
}

export default useDropdown;
