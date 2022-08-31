<template>
  <div class="w-full flex lg:flex-col lg:py-5 justify-between items-center px-24 border border-solid border-t-[#EFF0F6]">
    <div>
      <img height="34px" src="../../assets/images/Logo.png" alt="logo" />
      <p class="font-normal text-lg mt-4 text-[#6F6C90] lg:hidden">Copyright © 2021 BRIX Templates | All Rights Reserved</p>
    </div>
    <div class="rounded-full w-[500px] h-20 sm:h-16 md:my-5 mx-5 sm:w-full min-w-[300px] bg-white shadow-md border border-solid border-[#EFF0F6]">
      <div class="flex justify-between items-center w-full h-full pl-8 pr-5">
        <input type="text" placeholder="Enter your email" class="outline-none w-full" />
        <div class="sm:hidden">
          <button-submit title="Subscribe" button-style="h-[50px] px-[26px] " />
        </div>
      </div>
    </div>
    <div class="hidden sm:block my-5">
      <button-submit title="Subscribe" button-style="h-[50px] px-[16px] " />
    </div>
  </div>
</template>

<script>
import buttonSubmit from '~/components/button/buttonSubmit.vue';
export default {
  components: { buttonSubmit },
  name: 'BaseFooter',
};
</script>

<style></style>
