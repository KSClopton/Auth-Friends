// const { Component } = require("react");
import React from 'react'
import { Redirect, Route }from 'react-router-dom'
// import Login from './Login'

const PrivateRoute = ({component: Component, ...rest }) => {
return (
   <Route 
   {...rest} 
   render={props => {
    if(localStorage.get('token')) {
       return <Component {...props} />
    }  else {
       return <Redirect to='/login'/>
    }}}/>)}
    
    // localStorage.getItem('token') ? 
    //         (<Component {...props} />) : 
    //         (<Redirect to='/login'/>
    //         )}}/>
        
export default PrivateRoute