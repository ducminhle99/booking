<template>
  <div class="flex justify-center mt-11 mb-8">
    <div v-for="item in 3" :key="item" class="flex justify-center items-center">
      <div class="w-[34px] h-[34px] bg-[#EFF0F6] rounded-full transition-all duration-300 delay-200" :class="{ done: step >= item }">
        <div class="w-[34px] h-[34px] flex justify-center items-center" :class="{ done: step >= item }">{{ item }}</div>
      </div>
      <div class="w-[80%] h-[6px] bg-secondary rounded-full mx-[18px] transition-all duration-500" :class="{ 'progress-done': step > item }"></div>
    </div>
    <div class="w-[34px] h-[34px] bg-secondary rounded-full">
      <div class="w-[34px] h-[34px] flex justify-center items-center" :class="{ done: step == 4 }">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scope>
.done {
  background: #4a3aff !important;
  border-radius: 50%;
  color: #ffffff;
  transition-delay: 300ms;
}
.progress-done {
  background: #4a3aff !important;
}
</style>
