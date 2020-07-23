import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import FetchUser from './components/FetchUser'
import { Switch, Route, } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import { Container } from 'semantic-ui-react';
import Dashboard from './components/Dashboard';
import ProfileForm from './components/ProfileForm'
import ContactUs from './components/ContactUs';
import Documents from './components/Documents'
import Footer from './components/Footer';
import Profile from './components/Profile'



function App() {
  return (
    <div className="App">
      <FetchUser>
        <Navbar/>
        <div style={{minHeight:'86vh'}}>
        <Switch >
            <Route exact path='/' component={Register} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/documents' component={Documents} />
            <Route exact path='/profile' component={ProfileForm} /> 
            <Route exact path='/login' component={Login}/>
            <Route exact path='/contact_us' component={ContactUs}/>
        </Switch>
        </div>
        <Footer/>   
      </FetchUser>
    </div>
  );
}

export default App;


