import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://my-burger-react-73e91.firebaseio.com/'
})

export default instance