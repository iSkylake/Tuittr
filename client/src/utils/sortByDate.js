function sortByDate(a, b) {
	const dateA = new Date(a.date);
	const dateB = new Date(b.date);

	if(dateA < dateB) {
		return 1;
	} else if (dateA > dateB) {
		return -1;
	} else {
		return 0;
	}
}

export default sortByDate;
