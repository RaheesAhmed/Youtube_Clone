import axios from 'axios';

const KEY = 'AIzaSyCd5AR5w7qkxfiItVPZ3FZN_yLKYvdoP7E';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		Result: 50,
		key: KEY
	}
});
