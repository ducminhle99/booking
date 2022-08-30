<template>
  <div class="w-[284px]">
    <div
      @click="$emit('clickBudget')"
      class="flex px-[26px] w-full h-[114px] border-solid border-[2px] cursor-pointer shadow-md hover:border-primary rounded-[16px] py-6 mb-[22px]"
      :class="{ 'border-primary': active }"
    >
      <div
        class="w-6 h-6 rounded-full border-solid border-[#D9DBE9] border-[1.2px] my-auto mr-3"
        :class="{ 'border-purple border-[7.5px]': active }"
      />
      <p class="text-[#170F49] font-medium text-[18px] my-auto">{{ budget }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetCard',
  props: {
    budget: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
