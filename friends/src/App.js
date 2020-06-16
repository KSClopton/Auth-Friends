import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './Components/Login'
import Public from './Components/Public'
import PrivateRoute from './Components/PrivateRoute'

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
        
        <ul>
          <li>
            <Link to='/public'>Public Page</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/public' component={Public}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/protected'/>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
