import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1d500c4809244a23a0aa33d7e744bb72'
    }
})