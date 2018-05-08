import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import * as routes from '../constants/routes'
import theme from './ui/theme'
import Navigation from './Navigation'
import LandingPage from './Landing'
import SignUpPage from './SignUp'
import SignInPage from './SignIn'
import PasswordForgetPage from './PasswordForget'
import FeedsPage from './Feeds'
import AccountPage from './Account'
import { provideAuthUser } from './AuthUserContext'

injectGlobal`
* {
  font-family: 'Inconsolata', monospace;
  font-weight: 300;
}

${styledNormalize}`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route path={routes.FEEDS} component={() => <FeedsPage />} />
          <Route
            exact
            path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </Switch>
      </div>
    </Router>
  </ThemeProvider>
)

export default provideAuthUser(App)
