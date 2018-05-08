import React, { Fragment as F } from 'react'
import * as routes from '../constants/routes'
import { consumeAuthUser } from './AuthUserContext'
import SignOut from './SignOut'
import { Header, Navigation as NavUi, NavLink, Button } from './ui'
import { Link } from 'react-router-dom'
const SigInLink = Button.withComponent(Link)
const Navigation = consumeAuthUser(({ authUser }) => (
  <Header>
    <NavUi>
      {authUser ? (
        <F>
          <NavLink to={routes.FEEDS}>Feeds</NavLink>

          <NavLink to={routes.ACCOUNT}>Account</NavLink>

          <SignOut />
        </F>
      ) : (
        <F>
          <NavLink to={routes.LANDING}>Landing</NavLink>

          <SigInLink to={routes.SIGN_IN}>Sign In</SigInLink>
        </F>
      )}
    </NavUi>
  </Header>
))

export default Navigation
