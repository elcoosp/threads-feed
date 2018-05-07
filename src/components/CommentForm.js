import { db } from '../firebase/firebase'
import React, { Component } from 'react'
import Formalized from './Formalized'

export default class CommentForm extends Component {
  state = {
    error: null,
    success: false
  }
  set = key => val => () => this.setState(s => ({ [key]: val }))
  onSubmit = ({ comment }) => {
    db
      .collection(this.props.commentsPath)
      .add({ message: comment, likes: 0 })
      .then(this.set('success')('Comment sended !'))
      .catch(
        this.set('error')('Sorry, an error occured while sending comment !')
      )
  }

  render() {
    const { error, success } = this.state

    return (
      <div>
        <Formalized
          pickFields={({ comment }) => [comment]}
          submit={this.onSubmit}
        />
        {error && <span>{error}</span>}
        {success && <span>{success}</span>}
      </div>
    )
  }
}
