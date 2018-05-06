import React from 'react'
import { authorizations } from './withAuthorization'
import NewThreadForm from './NewThreadForm'
import FeedsNavigator from './FeedsNavigator'
const Home = authorizations.hasSignedIn(({ authUser }) => (
  <div>
    <h1>Home from {authUser.email}</h1>
    <NewThreadForm />
    <FeedsNavigator />
  </div>
))

export default Home
