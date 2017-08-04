export const getUsers = () => {
	const method = 'GET';
	return fetch('/users', {method}).then(
		response => response.json(),
		err => {
			console.log('Fail in getting users');
		}
	)
}