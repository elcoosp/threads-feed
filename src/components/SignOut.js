import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from './ui'

import { auth } from '../firebase'

const SignOutButton = withRouter(({ history }) => (
  <Button type="button" onClick={() => auth.doSignOut()}>
    Sign Out
  </Button>
))

export default SignOutButton
