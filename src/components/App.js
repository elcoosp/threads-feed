import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { firebase } from '../firebase'
import * as routes from '../constants/routes'

import Navigation from './Navigation'
import FeedThreadsList from './FeedThreadsList'
import LandingPage from './Landing'
import SignUpPage from './SignUp'
import SignInPage from './SignIn'
import PasswordForgetPage from './PasswordForget'
import HomePage from './Home'
import AccountPage from './Account'
import { provideAuthUser } from './AuthUserContext'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.FEED_ID} component={FeedThreadsList} />
    </div>
  </Router>
)

export default provideAuthUser(App)
