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
            <router-link class="px-2 text-white" to="/about">{{ $t('header.about') }}</router-link>
          </li>
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >{{ $t('header.loginregister') }}</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" to="/manage">{{ $t('header.manage') }}</router-link>
            </li>
            <li>
              <router-link class="px-2 text-white" to="/exit" @click.prevent="signOut"
                >{{ $t('header.exit') }}</router-link
              >
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="changeLocale">
              {{ currentLocale }}
            </a>
          </li>
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
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      let language = ''

      switch (this.$i18n.locale) {
        case 'en':
          language = 'English'
          break
        case 'fr':
          language = 'French'
          break
        case 'ptBr':
          language = 'Português - Br'
          break
        default:
          language = 'English'
      }

      return language
    }
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
    },
    changeLocale() {
      let language = ''

      switch (this.$i18n.locale) {
        case 'en':
          language = 'fr'
          break
        case 'fr':
          language = 'ptBr'
          break
        case 'ptBr':
          language = 'en'
          break
        default:
          language = 'ptBr'
          break
      }
      
      this.$i18n.locale = language
    }
  }
}
</script>
