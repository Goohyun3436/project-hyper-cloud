import axios from 'axios';

const server = 'http://localhost:4000/posts/';

export const fetchPreviewData = () => axios.get(server);
