<template>
  <div class="mt-16">
    <p class="font-bold text-2xl text-[#170F49]">What’s your project budget?</p>
    <p class="text-[#6F6C90] text-[18px] mt-2">Please select the project budget range you have in mind.</p>

    <div class="mt-10 flex flex-wrap sm:flex-col sm:items-center justify-between">
      <budget-card v-for="item in listBudget" :key="item.id" :budget="item.budget" @clickBudget="setBudget(item.id)" :active="select == item.id" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import budgetCard from '../card/budgetCard.vue';
export default Vue.extend({
  name: 'BudgetForm',
  components: { budgetCard },
  data: () => ({
    listBudget: [
      {
        id: 1,
        budget: '$5.000 - $10.000',
      },
      {
        id: 2,
        budget: '$10.000 - $20.000',
      },
      {
        id: 3,
        budget: '$20.000 - $50.000',
      },
      {
        id: 4,
        budget: '$50.000 +',
      },
    ],
    select: 0,
  }),
  methods: {
    setBudget: function (id: number) {
      if (!id) return;
      this.select = id;
      this.$emit('selectBudget', this.listBudget[id - 1].budget);
    },
  },
});
</script>

<style></style>
