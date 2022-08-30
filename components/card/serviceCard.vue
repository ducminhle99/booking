<template>
  <div class="w-[284px]">
    <div
      @click="handleClick()"
      class="flex px-[26px] w-full border-solid border-[2px] cursor-pointer shadow-md hover:border-[#4A3AFF] rounded-[16px] py-6 mb-[22px]"
      :class="{ 'border-[#4A3AFF]': active }"
    >
      <div>
        <div class="w-16 h-16 rounded-full bg-[#4a3aff2f] flex justify-center items-center mr-3">
          <template>
            <div>
              <component :is="icon"></component>
            </div>
          </template>
        </div>
      </div>
      <p class="text-[#170F49] font-medium text-[18px] my-auto">{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import terminal from '../icons/terminal.vue';
import maketing from '../icons/maketing.vue';
import web from '../icons/web.vue';
import setting from '../icons/setting.vue';
export default {
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    card: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  components: { terminal, maketing, web, setting },
  methods: {
    handleClick: function () {
      this.$emit('clickCard', this.card);
    },
  },
};
</script>

<style></style>
