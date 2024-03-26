<template>
  <div id="app">
    <hello-world #default="{ user, favorites }">
      <p>
        Hello {{ user.name }}, you are {{ user.age }} years old!<br />
        My favorites things are {{ favorites[0] }}, {{ favorites[1] }},
        {{ favorites[2] }}
      </p>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
