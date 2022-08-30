<template>
  <v-btn :class="buttonStyle" class="px-10" outlined color="#4A3AFF" elevation="2" rounded @click="action()" v-if="show">
    <p class="text-[#4A3AFF] my-auto text-lg font-normal normal-case">Previous step</p>
  </v-btn>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    buttonStyle: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
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
