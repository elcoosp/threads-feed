import React, { Component } from 'react'
import { db } from '../firebase/firebase'

class FeedsNavigator extends Component {
  state = {
    newFeeds: []
  }
  componentDidMount = () => {
    db
      .collection('feeds')
      .where('new', '==', true)
      .onSnapshot(snaps => {
        let newFeeds = []
        snaps.forEach(snap => newFeeds.push({ ...snap.data(), id: snap.id }))

        this.setState(state => ({ newFeeds }))
      })
  }

  render() {
    const { newFeeds } = this.state

    return (
      <div>
        <h1>Feeds</h1>
        <ul />

        {newFeeds.map(({ name, id }) => <li key={id}>{name}</li>)}
      </div>
    )
  }
}

export default FeedsNavigator
