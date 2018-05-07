import React, { Fragment } from 'react'
import { db } from '../firebase/firebase'
import { HandledSnapsMap } from './PackedSnaps'
import ThreadCard from './ThreadCard'

const FeedThreadsList = ({ match: { params } }) => {
  console.log(params)

  return (
    <Fragment>
      <h1>{params.id} feed</h1>
      <HandledSnapsMap
        query={db
          .collection(`feeds/${params.id}/threads`)
          .orderBy('threadLink')}
        mapTo={ThreadCard}
      />
    </Fragment>
  )
}

export default FeedThreadsList
