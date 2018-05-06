import React, { Component } from 'react'
import { db } from '../firebase/firebase'
import { Link, Route } from 'react-router-dom'
import * as routes from '../constants/routes'
import { packSnaps } from '../utils'
class FeedsNavigator extends Component {
  state = {
    newFeeds: []
  }
  set = key => data => this.setState(state => ({ [key]: data }))

  componentDidMount = () => {
    packSnaps(
      db
        .collection('feeds')
        .orderBy('name')
        .limit(2),
      this.set(`newFeeds`)
    )
  }

  render() {
    const { newFeeds } = this.state

    return (
      <div>
        <h1>Feeds</h1>

        <ul>
          {newFeeds.map(({ name, id }) => (
            <Link key={id} to={`/feed/${id}`}>
              {name}
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

export default FeedsNavigator
