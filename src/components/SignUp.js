import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../firebase'
import * as routes from '../constants/routes'
import Formalized from './Formalized'
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
)

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

const SignUpForm = withRouter(
  class CustomForm extends Component {
    state = {
      error: null
    }
    onSubmit = values => {
      const { password, email } = values
      const { history } = this.props
      auth
        .doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          history.push(routes.HOME)
        })
        .catch(error => {
          this.setState(byPropKey('error', error))
        })
    }

    render() {
      const { error } = this.state
      return (
        <div>
          <Formalized
            pickFields={({ email, password, passwordConfirm }) => [
              email,
              password,
              passwordConfirm
            ]}
            submit={this.onSubmit}
          />
          {error && <span>{error}</span>}
        </div>
      )
    }
  }
)

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
)

export default SignUpPage

export { SignUpForm, SignUpLink }
