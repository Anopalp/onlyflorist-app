import axios from 'axios'

const get = (url) => {
	return axios.get(url).then((response) => response.data)
}

const add = (url, data) => {
	return axios.post(url, data).then((response) => response.data)
}

export { get, add }
