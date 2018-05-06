import React from 'react'
import { db } from '../firebase/firebase'
import { Link } from 'react-router-dom'
import { HandledSnapsMap } from './PackedSnaps'

const FeedLink = ({ id, name }) => (
  <Link key={id} to={`/feed/${id}`}>
    {name}
  </Link>
)

export default () => (
  <HandledSnapsMap
    query={db
      .collection('feeds')
      .orderBy('name')
      .limit(2)}
    mapTo={FeedLink}
  />
)
