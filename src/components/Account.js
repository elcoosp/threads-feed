import React from 'react'
import { authorizations } from './withAuthorization'
import PasswordChangeForm from './PasswordChange'

const AccountPage = authorizations.hasSignedIn(({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordChangeForm />
  </div>
))

export default AccountPage
