import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC5a1CCQpno0jF-Ps_UxcO2hCXQl2x9RSw',
  authDomain: 'music-7bdcd.firebaseapp.com',
  projectId: 'music-7bdcd',
  storageBucket: 'music-7bdcd.appspot.com',
  messagingSenderId: '453437663540',
  appId: '1:453437663540:web:90725e86b38720b0f51d61',
  measurementId: 'G-L4QQG3724W'
}

//Inicializando o Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

//Detalhe importante: não é necessário a collection existir para poder utilizá-la, porque se não existir o firebase irá criá-la.
const usersCollection = db.collection('users')

export { auth, db, usersCollection }
