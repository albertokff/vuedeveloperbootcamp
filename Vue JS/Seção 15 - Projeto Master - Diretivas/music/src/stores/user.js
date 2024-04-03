import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    // A função register é regular porque uma arrow function não permitiria interagir com um state das actions
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await userCred.user.updateProfile({
        displayName: values.name
      })

      // Podemos acessar o state de uma store por meio de uma action usando a chave this
      this.userLoggedIn = true
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    },
    async signOut() {
      await auth.signOut()

      this.userLoggedIn = false
    }
  }
})
