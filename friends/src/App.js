import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './Components/Login'
import Public from './Components/Public'
import PrivateRoute from './Components/PrivateRoute'
import styled from 'styled-components'
import SignedInNav from './Components/SignedInNav'
import FriendsList from './Components/FriendsList'
import {withRouter} from 'react-router-dom'


const initialFormValues = {email: '', password: ''}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChanges = e => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  
  return (
    <Router>
    <div>
      <div>
        <NavItems>
            {/* <Link to='/public'>Public Page</Link>
            <Link to='/protected'>Protected Page</Link> */}
        </NavItems>
        <Login />
        <Switch>
          <Link to='/'>
            <Route path='/public' component={Public}/>
          </Link>
          <Link to='/'>
            <Route path='/login' component={Login}/>
          </Link>
          {/* <PrivateRoute path='/protected'/> */}
          <Route path='protected'/>
            <SignedInNav />
            <FriendsList />
        </Switch>
      </div>
    </div>
    </Router>
  );
}
const NavItems = styled.div`
  background-color: rgba(45, 45, 54);
  display: flex;
  justify-content: space-evenly;

    a {
      list-style: none;
      text-decoration: none;
      color: white; 
  }
 
`
export default App;
