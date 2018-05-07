import React, { Fragment } from 'react'
import { authorizations } from './withAuthorization'
import NewThreadForm from './NewThreadForm'
import { Switch, Route } from 'react-router-dom'
import FeedsNavigator from './FeedsNavigator'
import FeedThreadsList from './FeedThreadsList'
import * as routes from '../constants/routes'

const FeedList = () => (
  <Fragment>
    <h1>Feeds </h1>
    <NewThreadForm />
    <FeedsNavigator />
  </Fragment>
)

const FeedsPage = authorizations.hasSignedIn(({ authUser }) => (
  <Switch>
    <Route exact path={routes.FEEDS} component={FeedList} />
    <Route exact path={routes.FEED_ID} component={FeedThreadsList} />
  </Switch>
))

export default FeedsPage
