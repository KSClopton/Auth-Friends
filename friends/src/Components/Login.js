import React, {useState} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../AxiosAuth'
import {withRouter} from 'react-router-dom'

const initialState = {username: 'Lambda School', password: 'i<3Lambd4'}

const Login = (props) => {
    
    const [state, setState] = useState(initialState)

    const handleLoginChange = e => {
        setState({
            ...state.credentials,
            [e.target.name]: e.target.value
        })
    }
    const login = e => {
        e.preventDefault()
        // Make a post request and send the credentials object to the API
        axiosWithAuth()
        .post('http://localhost:5000/api/login', state)
        .then(res => {
            // get token and set to local storage
            window.localStorage.setItem('token', res.data.payload)
            props.history.push('/protected')
        })
        .catch(err => {
            console.log("Your post did not work")
           
        })
        
            
    }

    return (
        <div>
            <form onSubmit={login}>
                <input 
                value= {state.username}
                name='username'
                placeholder='UserName'
                onChange={handleLoginChange}/>

                <input
                value={state.password}
                name='password'
                placeholder='Password'
                onChange={handleLoginChange}/>

                <button type='submit'>Login</button>
            </form>
        </div>
    )

    }
//     axios.post('endpoint', userCredentials)
//         .then(res => {
//             localStorage.setItem('token', res.data.token)
//             props.history.push('/dashboard')
//         })
// }
export default Login