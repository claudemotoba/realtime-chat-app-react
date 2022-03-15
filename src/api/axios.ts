import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    }
});