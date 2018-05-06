import React, { Component } from 'react'
import Formalized from './Formalized'
import { authorizations } from './withAuthorization'
import { db } from '../firebase/firebase'

class NewThreadForm extends Component {
  state = {
    error: null,
    success: null
  }

  setStateKey = key => data => this.setState(prevState => ({ [key]: data }))
  onSubmit = values => {
    const { feedName, threadLink } = values
    const feedRef = db.collection('feeds').doc(feedName)

    feedRef.set({ name: feedName })
    feedRef
      .collection('threads')
      .add({ threadLink })
      .then(resp => this.setState(prevState => ({ success: true })))
      .catch(e => this.setState(prevState => ({ error: e })))
  }

  render() {
    const { error, success } = this.state
    return (
      <div>
        <Formalized
          pickFields={({ feedName, threadLink }) => [feedName, threadLink]}
          submit={this.onSubmit}
        />
        {error && <span>{error}</span>}
        {success && <span>Succesfully sended form</span>}
      </div>
    )
  }
}

export default authorizations.hasSignedIn(NewThreadForm)
