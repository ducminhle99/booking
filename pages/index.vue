<template>
  <div class="flex justify-center">
    <div class="w-[700px] md:w-full md:p-4">
      <div class="flex max-w-[566px] flex-col items-center justify-center mt-14 mb-[42px] mx-auto">
        <p class="font-bold text-[34px]">Get a project quote</p>
        <p class="w-full text-[#6F6C90] text-center text-[18px] mt-3">
          Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.
        </p>
      </div>
      <booking-form />
    </div>
  </div>
</template>

<script>
import bookingForm from '~/components/bookingForm.vue';

export default {
  name: 'IndexPage',
  components: { bookingForm },
};
</script>
