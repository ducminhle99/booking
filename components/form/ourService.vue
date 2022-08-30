<template>
  <div class="mt-16">
    <p class="font-bold text-2xl text-[#170F49]">Our services</p>
    <p class="text-[#6F6C90] text-[18px] mt-2">Please select which service you are interested in.</p>
    <div class="mt-10 flex flex-wrap sm:flex-col sm:items-center justify-between">
      <service-card
        v-for="item in listService"
        :key="item.id"
        :icon="item.icon"
        :title="item.title"
        :card="item.id"
        :active="item.id == selectedService"
        @clickCard="selectService"
      />
    </div>
  </div>
</template>

<script lang="ts">
import serviceCard from '../card/serviceCard.vue';
import Vue from 'vue';
export default Vue.extend({
  name: 'OurService',
  components: { serviceCard },
  data: () => ({
    listService: [
      {
        id: 1,
        icon: 'terminal',
        title: 'Development',
      },
      {
        id: 2,
        icon: 'web',
        title: 'Web Design',
      },
      {
        id: 3,
        icon: 'maketing',
        title: 'Marketing',
      },
      {
        id: 4,
        icon: 'setting',
        title: 'Other',
      },
    ],
    selectedService: 0,
  }),
  methods: {
    selectService: function (id: number): void {
      if (!id) return;
      this.selectedService = id;
      this.$emit('selectService', this.listService[id - 1].title);
    },
  },
});
</script>

<style></style>
