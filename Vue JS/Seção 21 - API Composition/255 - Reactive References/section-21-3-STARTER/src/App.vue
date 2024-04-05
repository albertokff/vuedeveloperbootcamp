<template>
  <p>{{ num }}</p>
  <p>{{ double }}</p>
  <button type="button" @click.prevent="increment">Click Me</button>

  <p>{{ name }}</p>
  
  <input type="text" v-model="phrase">
  
  <p>{{ reversedPhrase }}</p>

  <app-alert :user="user" />

  <button type="button" ref="btn">Button</button>
</template>

<script>
import { ref, reactive, toRefs, watchEffect, computed, onBeforeMount, onMounted } from 'vue'
import AppAlert from '@/components/Alert.vue'

export default {
  name: "App",
  components: {
    AppAlert
  },  
  setup() {
    const btn = ref(null)

    onBeforeMount(() => {
      console.log('onBeforeMount()')
    })
    onMounted(() => {
      console.log('onMounted()')

      btn.value.addEventListener('click', () => {
        console.log('button clicked!')
      })
    })

    let num = ref(0)

    function increment() {
      num.value++
    }

    const double = computed(() => {
      return num.value * 2
    })

    const user = reactive({
      name: 'John',
      age: 20
    })

    setTimeout(() => {
      user.name = "Luis"
    }, 3000)

    const phrase = ref("")
    const reversedPhrase = ref("")

    watchEffect(() => {
      reversedPhrase.value = phrase.value.split("").reverse().join("")
    })

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn
    }
  }
};
</script>
