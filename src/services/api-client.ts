import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key:'bfde935fb78d491fa4c34567c86a1048'
    }
    
})
