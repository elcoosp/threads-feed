import * as firebase from 'firebase'

require('firebase/firestore')
const config = {
  apiKey: 'AIzaSyBR5h1ImSRAXKtgbgR5zjARGpf-UwwaVGs',
  authDomain: 'klump-559e3.firebaseapp.com',
  databaseURL: 'https://klump-559e3.firebaseio.com',
  projectId: 'klump-559e3',
  storageBucket: 'klump-559e3.appspot.com',
  messagingSenderId: '178525225036'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export const auth = firebase.auth()
export const storage = firebase.storage()
export const messaging = firebase.messaging()

export default firebase
