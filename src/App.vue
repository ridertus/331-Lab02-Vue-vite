<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const { message } = storeToRefs(store)
import { ref } from 'vue'
const sizes = ref<number>(3);
</script>

<template>
  <header class="max-h-screen leading-normal">
    <h3>642115006 Jakkaphat</h3>
    <div id="flashMessage" v-if="message">
      <h4>{{ message }}</h4>
    </div>
      <nav class="flex space-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/category">Category</RouterLink>
        <RouterLink to="/student">Student</RouterLink>
      </nav>
  </header>
  <div class="size">
    <label> Size: </label>
    <input class="sizes" type="number" v-model="sizes">
  </div>

  <RouterView :size="sizes" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h4 {
  font-size: 20px;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation: yellowfade 3s ease-in-out;
}
</style>
