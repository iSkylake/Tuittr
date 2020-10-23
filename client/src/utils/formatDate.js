const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(date) {
	const postDate = new Date(date);
	return `${months[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}`;
}

export default formatDate;
