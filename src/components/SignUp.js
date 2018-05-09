import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../firebase'
import * as routes from '../constants/routes'
import { Main, Title } from './ui'
import Formalized from './Formalized'
const SignUpPage = () => (
  <Main>
    <Title>SignUp</Title>
    <SignUpForm />
  </Main>
)

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

const SignUpForm = withRouter(
  class SignUpForm extends Component {
    state = {
      error: null
    }
    onSubmit = values => {
      const { password, email } = values
      const { history } = this.props
      auth
        .doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          history.push(routes.FEEDS)
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
          {error && <span>An error occured</span>}
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
