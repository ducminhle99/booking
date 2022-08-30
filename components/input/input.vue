<template>
  <v-form v-model="valid" class="pb-[18px]">
    <p class="text-[#170F49] font-medium text-[18px] mb-[18px] capitalize">{{ title }}</p>
    <v-text-field
      @change="handleChangeText()"
      full-width
      height="66px"
      v-model="text"
      :rules="rule"
      :placeholder="placeholder"
      class="w-[284px] h-[66px] rounded-full text-[18px] sm:w-full"
      outlined
      required
    >
      <template v-slot:append>
        <component :is="icon"></component>
      </template>
    </v-text-field>
  </v-form>
</template>

<script>
import UserIcon from '../icons/user.vue';
import CompanyIcon from '../icons/company.vue';
import MailIcon from '../icons/mail.vue';
import PhoneIcon from '../icons/phone.vue';
export default {
  name: 'InputForm',
  components: {
    UserIcon,
    CompanyIcon,
    MailIcon,
    PhoneIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '...',
    },
    icon: {
      type: String,
      default: '',
    },
    rule: {
      type: [],
      default: [(v) => !!v || 'Text is required'],
    },
  },
  data: () => ({
    valid: false,
    text: '',
  }),
  methods: {
    handleChangeText: function () {
      if (this.valid) {
        this.$emit('changeText', { [this.title]: this.text });
      }
    },
  },
};
</script>

<style scope>
.v-text-field__slot {
  padding: 20px;
}
</style>
