import axios from 'axios'

const FlyApi = axios.create({
    baseURL : "http://localhost:9090"
})

export default FlyApi