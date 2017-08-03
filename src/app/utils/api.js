import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export { getRepoData }

function getRepoData(path) {
	const url = `${BASE_URL}/${path}`;
	return axios.get(url)
		.then(response => response.data);
}