export const submitLogin = body => {
	const method = 'POST';
	body = JSON.stringify(body);
	return fetch('/users', {method, body}).then(
		response => response.json(),
		err => console.log(err)
		);
}