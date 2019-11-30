import axios from 'axios'

// METHOD TO INITIATE API REQUEST
const FETCHING_API = () => axios.get('https://jsonplaceholder.typicode.com/users')

export {
  FETCHING_API
}
