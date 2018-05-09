import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Formalized from './Formalized'
import { Main, Title, ErrorMessage } from './ui'
import { auth } from '../firebase'

const PasswordForgetPage = () => (
  <Main>
    <Title>Password Forget</Title>
    <PasswordForgetForm />
  </Main>
)

class PasswordForgetForm extends Component {
  state = { error: null, success: false }
  onSubmit = values =>
    auth
      .doPasswordReset(values.email)
      .then(() => this.setState(() => ({ success: true })))
      .catch(error => this.setState(state => ({ error: error.message })))

  render() {
    const { success, error } = this.state

    return (
      <Fragment>
        <Formalized
          pickFields={({ email }) => [email]}
          submit={this.onSubmit}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <p>An email has been sended to your adress</p>}
      </Fragment>
    )
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>
)

export default PasswordForgetPage

export { PasswordForgetForm, PasswordForgetLink }
