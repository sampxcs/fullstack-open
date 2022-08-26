import axios from 'axios'

const getData = () => {
  return axios
    .get('http://localhost:5500/db.json')
    .then((response) => response.data)
    .catch(() => console.error('errrooor'))
}

export default getData
