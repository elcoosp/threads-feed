import React, { Component } from 'react'
import { db } from '../firebase/firebase'

export default class Comment extends Component {
  like = () => {
    const { commentsPath, likes, id } = this.props
    db
      .collection(commentsPath)
      .doc(id)
      .update({ likes: likes + 1 })
  }
  render() {
    const { message, likes, id } = this.props
    return (
      <div>
        <p>{message}</p>
        <span>{likes}</span>
        <button onClick={this.like}>Like</button>
      </div>
    )
  }
}
