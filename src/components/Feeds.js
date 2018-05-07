import React, { Fragment } from 'react'
import { authorizations } from './withAuthorization'
import NewThreadForm from './NewThreadForm'
import { Route, Switch } from 'react-router-dom'
import FeedsNavigator from './FeedsNavigator'
import FeedThreadsList from './FeedThreadsList'

const FeedsHome = () => (
  <Fragment>
    <h1>Feeds </h1>
    <NewThreadForm />
    <FeedsNavigator />
  </Fragment>
)

const FeedsPage = authorizations.hasSignedIn(({ authUser, match: { url } }) => {
  return (
    <Switch>
      <Route path={url + '/:id'} component={FeedThreadsList} />
      <Route exact path={url} component={FeedsHome} />
    </Switch>
  )
})

export default FeedsPage
