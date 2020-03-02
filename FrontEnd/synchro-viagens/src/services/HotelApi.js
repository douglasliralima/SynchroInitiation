import axios from "axios"

HotelApi = axios.create({
    baseURL : "http://localhost:9080"
})

export default HotelApi;