<template>
  <div class="mt-16 flex flex-col sm:items-center">
    <p class="font-bold text-2xl text-[#170F49]">Contact details</p>
    <p class="text-[#6F6C90] text-[18px] mt-2">Lorem ipsum dolor sit amet consectetur adipisc.</p>
    <div class="mt-10 flex flex-wrap justify-between sm:flex-col">
      <input-form icon="user-icon" title="name" placeholder="Your name" :rule="nameRules" @changeText="handleInput" />
      <input-form icon="mail-icon" title="email" placeholder="Email address" :rule="emailRules" @changeText="handleInput" type="email" />
      <input-form icon="phone-icon" title="phone" placeholder="033333333" :rule="phoneRules" @changeText="handleInput" type="number" />
      <input-form icon="company-icon" title="company" placeholder="Company name" :rule="companyRules" @changeText="handleInput" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InputForm from '../input/input.vue';
export default Vue.extend({
  name: 'ContactDetail',
  components: {
    InputForm,
  },
  data: () => ({
    nameRules: [(v: string) => !!v || 'Name is required'],
    companyRules: [(v: string) => !!v || 'Company name is required'],
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/.test(v) || 'E-mail is not valid',
    ],
    phoneRules: [
      (v: string) => !!v || 'Phone number is required',
      (v: string) => /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(v) || 'Phone number is not valid',
    ],
    contact: {
      name: '',
      email: '',
      phone: '',
      company: '',
    },
  }),
  methods: {
    handleInput: function (text: String) {
      console.log(text);

      this.contact = { ...this.contact, ...text };

      this.$emit('setContact', this.contact);
    },
  },
});
</script>

<style></style>
