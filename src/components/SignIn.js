import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { PasswordForgetLink } from './PasswordForget'
import { SignUpLink } from './SignUp'
import { auth } from '../firebase'
import * as routes from '../constants/routes'
import Formalized from './Formalized'
import { Main, Title, ErrorMessage } from './ui'

const SignInPage = ({ history }) => (
  <Main>
    <Title>Sign In</Title>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </Main>
)

const SignInForm = withRouter(
  class SignInForm extends Component {
    state = { error: null }
    onSubmit = values => {
      const { email, password } = values

      const { history } = this.props

      auth
        .doSignInWithEmailAndPassword(email, password)
        .then(() => history.push(routes.FEEDS))
        .catch(({ message }) =>
          this.setState(prevState => ({ error: message }))
        )
    }

    render() {
      const { error } = this.state
      return (
        <Fragment>
          <Formalized
            pickFields={({ email, password }) => [email, password]}
            submit={this.onSubmit}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Fragment>
      )
    }
  }
)

export default SignInPage

export { SignInForm }
