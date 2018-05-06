import React from 'react'
import { withRouter } from 'react-router-dom'

import { auth } from '../firebase'

const SignOutButton = withRouter(({ history }) => (
  <button type="button" onClick={() => auth.doSignOut()}>
    Sign Out
  </button>
))

export default SignOutButton
