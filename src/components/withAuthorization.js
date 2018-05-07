import React from 'react'
import { withRouter } from 'react-router-dom'

import { AuthUserContext } from './AuthUserContext'
import { firebase } from '../firebase'
import * as routes from '../constants/routes'

const withAuthorization = authCondition => Component =>
  withRouter(
    class WithAuthorization extends React.Component {
      componentDidMount = () =>
        firebase.auth.onAuthStateChanged(authUser => {
          if (!authCondition(authUser)) {
            this.props.history.push(routes.SIGN_IN)
          }
        })

      render() {
        return (
          <AuthUserContext.Consumer>
            {authUser =>
              authUser ? (
                <Component authUser={authUser} {...this.props} />
              ) : null
            }
          </AuthUserContext.Consumer>
        )
      }
    }
  )

export const authorizations = {
  hasSignedIn: withAuthorization(authUser => !!authUser)
}
export default withAuthorization
