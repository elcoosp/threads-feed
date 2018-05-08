import React, { Fragment as F } from 'react'
import * as routes from '../constants/routes'
import { consumeAuthUser } from './AuthUserContext'
import { Link } from 'react-router-dom'
import SignOutButton from './SignOut'
import UI from './ui'

const Navigation = consumeAuthUser(({ authUser }) => (
  <UI.Header>
    <UI.Navigation>
      {authUser ? (
        <F>
          <li>
            <Link to={routes.FEEDS}>Feeds</Link>
          </li>
          <li>
            <Link to={routes.ACCOUNT}>Account</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </F>
      ) : (
        <F>
          <li>
            <Link to={routes.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={routes.SIGN_IN}>Sign In</Link>
          </li>
        </F>
      )}
    </UI.Navigation>
  </UI.Header>
))

export default Navigation
