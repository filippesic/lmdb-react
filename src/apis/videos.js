import axios from "axios";

export default axios.create({
    baseURL: 'https://lmdb.test/api'
})