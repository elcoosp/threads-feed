import React, { Component } from 'react'
const packSnaps = (query, cb, errorCb) =>
  query.onSnapshot(snaps => {
    let packedSnaps = []
    snaps.forEach(
      snap => snap.exists && packedSnaps.push({ ...snap.data(), id: snap.id })
    )
    cb(packedSnaps)
  }, errorCb)

class PackedSnaps extends Component {
  state = {
    data: null,
    error: null
  }
  set = key => data => this.setState(state => ({ [key]: data }))

  componentDidMount = () =>
    (this.unsubscribe = packSnaps(
      this.props.query,
      this.set('data'),
      this.set('error')
    ))

  componentWillUnmount = () => this.unsubscribe()

  render() {
    const Loader = this.props.loader
    const { error, data } = this.state
    return error || data ? this.props.children({ error, data }) : <Loader />
  }
}

// TODO: pass config for components
export const HandledSnapsMap = ({ query, mapTo }) => (
  <PackedSnaps loader={() => <span>Loading</span>} query={query}>
    {({ data, error }) => {
      const Component = mapTo
      return data ? (
        <div>{data.map(doc => <Component key={doc.id} {...doc} />)}</div>
      ) : (
        error && <span>An error occured</span>
      )
    }}
  </PackedSnaps>
)
export default PackedSnaps
