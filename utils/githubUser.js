const axios = require("axios");
const ghUserApi = {
	getUser(username) {
		try {
			const githubUser = `https://api.github.com/users/${username}`;
			return axios.get(githubUser);
		} catch (err) {
            console.log(err);
		}
	}
};

module.exports = ghUserApi;