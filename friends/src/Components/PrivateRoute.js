// const { Component } = require("react");
import { Redirect }from 'react-router-dom'
import Login from './Login'

const PrivateRoute = ({component: Component, ...rest }) => {}
//     <Route {...rest} render={props=>
//         localStorage.getItem('token') ? 
//         (<Component {...props} />) : 
//         (<Redirect to='/login'/>
//         )} />
// )
export default PrivateRoute