export const packSnaps = (query, cb) =>
  query.onSnapshot(snaps => {
    let packedSnaps = []
    snaps.forEach(
      snap => snap.exists && packedSnaps.push({ ...snap.data(), id: snap.id })
    )
    cb(packedSnaps)
  })
