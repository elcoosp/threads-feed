import React, { Component, Fragment } from 'react'
import { HandledSnapsMap } from './PackedSnaps'
import { db } from '../firebase/firebase'
import { withRouter } from 'react-router-dom'
import CommentForm from './CommentForm'
import Comment from './Comment'

export default withRouter(
  class ThreadCard extends Component {
    state = { commentsVisible: false }
    toggle = key => () =>
      this.setState(prevState => ({ [key]: !prevState[key] }))
    render() {
      const { threadLink, threadName, match, id } = this.props
      const { commentsVisible } = this.state
      const commentsPath = `${match.url}/threads/${id}/comments`
      return (
        <div>
          <h2>{threadName}</h2>
          <a href={threadLink}>Go to see it !</a>
          <button onClick={this.toggle('commentsVisible')}>
            {commentsVisible ? 'Hide comments' : 'Show comments'}
          </button>
          {commentsVisible && (
            <Fragment>
              <CommentForm commentsPath={commentsPath} />
              <HandledSnapsMap
                query={db.collection(commentsPath).orderBy('message')}
                mapTo={props => (
                  <Comment commentsPath={commentsPath} {...props} />
                )}
              />
            </Fragment>
          )}
        </div>
      )
    }
  }
)
