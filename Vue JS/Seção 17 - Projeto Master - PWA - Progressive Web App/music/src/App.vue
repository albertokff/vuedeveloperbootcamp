<!-- eslint-disable vue/no-parsing-error -->
<template>
  <app-header />

  <router-view> </router-view>

  <app-player />

  <auth />
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppPlayer from '@/components/Player.vue'
import Auth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from './includes/firebase'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppPlayer,
    Auth
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
