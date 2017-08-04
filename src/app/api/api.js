export const login = body => {
	const method = 'POST';
	const headers = {'Content-type': 'application/json'};
	body = JSON.stringify(body);
	return fetch(`/login`, {method, headers, body}).then(
		response => response.json(),
		err => console.log(err)
	);
};