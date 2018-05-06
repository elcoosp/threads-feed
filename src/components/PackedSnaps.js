import React, { Component } from 'react'
import { packSnaps } from '../utils'
class PackedSnaps extends Component {
  state = {
    data: []
  }
  set = key => data => this.setState(state => ({ [key]: data }))

  componentDidMount = () =>
    (this.unsubscribe = packSnaps(this.props.query, this.set('data')))

  componentWillUnmount = () => this.unsubscribe()

  render() {
    const Loader = this.props.loader

    return this.state.data.length > 0 ? (
      this.props.children(this.state.data)
    ) : (
      <Loader />
    )
  }
}

export default PackedSnaps
