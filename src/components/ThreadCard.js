import React, { Component } from 'react'

export default class ThreadCard extends Component {
  render() {
    const { threadLink } = this.props

    return (
      <div>
        <a href={threadLink}>Go to see it !</a>
      </div>
    )
  }
}
