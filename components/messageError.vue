<template>
  <div v-if="message !== ''" class="flex justify-center items-center bg-rose-200 rounded-lg p-4 mb-6" role="alert">
    <p class="text-red my-auto">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'MessageError',
  props: {
    message: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
