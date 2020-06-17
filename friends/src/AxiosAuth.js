import axios from 'axios'


export const axiosWithAuth = (props) => {

    const token = window.localStorage.getItem('token')
    
    return axios.create({
        headers: { Authorization: token }
    })
    
}
// need this?
// Authorization: `Bearer: ${token}`

