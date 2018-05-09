import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../firebase'
import * as routes from '../constants/routes'
import { Main, Title, ErrorMessage, Link } from './ui'
import Formalized from './Formalized'
const SignUpPage = () => (
  <Main>
    <Title>Sign up</Title>
    <SignUpForm />
  </Main>
)

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
        .then(authUser => history.push(routes.FEEDS))
        .catch(error => this.setState(state => ({ error: error.message })))
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
          {error && <ErrorMessage>An error occured</ErrorMessage>}
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
