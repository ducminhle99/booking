<template>
  <div class="flex flex-col items-center mt-10">
    <img src="../../assets/images/finish.png" class="mb-[18px] w-[150px] h-auto" alt="image" />
    <p class="font-bold text-2xl text-[#170F49]">Submit your quote request</p>
    <p class="text-[#6F6C90] text-[18px] mt-2 text-center w-full max-w-[500px]">
      Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in
      24 - 48 hours.
    </p>
    <button-submit title="Submit" button-style="h-[60px] px-[26px]" @action="$emit('submitForm')" />
  </div>
</template>

<script>
import buttonSubmit from '../button/buttonSubmit.vue';
export default {
  components: { buttonSubmit },
  name: 'FinishForm',
};
</script>

<style></style>
