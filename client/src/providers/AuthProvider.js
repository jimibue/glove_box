import React from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component {

  state = {user: null}

  handleRegister = (user, history) => {
    debugger
    axios.post('/api/auth', user)
    .then(res => {
      debugger
      this.setState({user: res.data.data})
      history.push('/dashboard')
    })
    .catch (res => {
      console.log(res)
      debugger
      alert('Invalid login attempt')
    })
  }

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
    .then(res => {
      this.setState({user: res.data.data})
      history.push('/dashboard')
    })
    .catch (res => {
      console.log(res)
      alert('Invalid login attempt')
    })
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
    .then(res => {
      this.setState({ user: null})
      history.push('/login')
    })
    .catch(res => {
      console.log(res)
    })
  }

  render (){
    return(
      <AuthContext.Provider 
        value={{
          ...this.state,
          authenticated: this.state.user !== null,
          handleLogin: this.handleLogin,
          handleRegister: this.handleRegister,
          handleLogout: this.handleLogout,
          setUser: (user) => this.setState({user,}),
        }}
      >
        {this.props.children}

      </AuthContext.Provider>
    )
  }
}

export default AuthProvider