import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID higSu2WvfO6I8wfxiicjqvdYyrux2mUraAHqF3Owxcs'
	}
});