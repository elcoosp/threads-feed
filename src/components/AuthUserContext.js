import React from 'react'
import { firebase } from '../firebase'

export const AuthUserContext = React.createContext(null)

export const consumeAuthUser = Component => props => (
  <AuthUserContext.Consumer>
    {authUser => <Component authUser={authUser} {...props} />}
  </AuthUserContext.Consumer>
)

export const provideAuthUser = Component =>
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    }

    componentDidMount = () =>
      firebase.auth.onAuthStateChanged(authUser =>
        this.setState(() => ({
          authUser: authUser ? authUser : null
        }))
      )

    render() {
      const { authUser } = this.state

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      )
    }
  }
