<template>
  <v-btn class="px-10" :class="buttonStyle" color="#4A3AFF" elevation="2" rounded @click="action()" v-if="show">
    <p class="text-white font-bold text-lg normal-case my-auto">{{ title }}</p>
  </v-btn>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    title: {
      type: String,
      default: '',
    },
    buttonStyle: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    action: function () {
      this.$emit('action');
    },
  },
};
</script>

<style></style>
