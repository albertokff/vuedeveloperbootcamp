<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Dev's App Music</router-link
      >
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <li>
            <router-link class="px-2 text-white" to="/about">Sobre</router-link>
          </li>
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Entrar / Registrar</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" to="/manage">Gerenciar</router-link>
            </li>
            <li>
              <router-link class="px-2 text-white" to="/exit" @click.prevent="signOut"
                >Sair</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
    signOut() {
      this.userStore.signOut()

      if (this.$router.meta.requiresAuth) {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
