<template>
  <v-app class="min-h-screen">
    <base-header />
    <Nuxt />
    <base-footer />
  </v-app>
</template>

<script>
import BaseHeader from './components/header.vue';
import BaseFooter from './components/footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

h1,
h2,
h3,
h4,
p {
  font-family: 'DM Sans', sans-serif;
}
</style>
