import React, {useState} from 'react'
import axios from 'axios'

const initialState = {username: '', password: ''}

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

        axios.post('http://locahost:5000/api/login', state.credentials)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log("Your post did not work")
        })
    }

    return (
        <div>
            <form onSubmit={login}>
                <input 
                value= {state.credentials.username}
                name='username'
                placeholder='UserName'
                onChange={handleLoginChange}/>

                <input
                value={state.credentials.password}
                name='password'
                placeholder='Password'
                onChange={handleLoginChange}/>

                <button>Login</button>
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