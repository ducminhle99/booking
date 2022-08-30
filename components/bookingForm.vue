<template>
  <div>
    <div
      class="w-[700px] md:w-full h-[600px] md:h-auto shadow-md rounded-[34px] border border-solid border-[#EFF0F6] px-[50px] sm:px-[10px] pb-[20px]"
    >
      <step :step="step" />
      <div class="w-full h-[1px] bg-[#EFF0F6]" />

      <div v-for="item in content" :key="item" v-show="content[step - 1] == item">
        <keep-alive>
          <component :is="item" @setContact="setContact" @selectService="setService" @selectBudget="setBudget" @submitForm="handleSubmit"></component>
        </keep-alive>
      </div>
    </div>
    <div class="mt-8 mb-[100px]">
      <message-error :message="message" />
      <div class="w-full flex xsm:flex-col">
        <button-back button-style="h-[60px] xsm:w-full" title="Next step" @action="handleback()" :show="step > 1" />
        <button-submit button-style="h-[60px] xsm:w-full xsm:mt-[20px] mx-auto mr-0" title="Next step" @action="handleNext()" :show="step < 4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Step from './step.vue';
import contactDetail from './form/contactDetail.vue';
import OurService from './form/ourService.vue';
import BudgetForm from './form/budgetForm.vue';
import FinishForm from './form/finishForm.vue';
import ButtonSubmit from './button/buttonSubmit.vue';
import ButtonBack from './button/buttonBack.vue';
import { IContact } from '../interface/type';
import { checkEmptyOBJ } from '../helper/validate';
import MessageError from './messageError.vue';

interface Data {
  step: number;
  content: string[];
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
  service: string;
  budget: string;
  message: string;
}
export default {
  name: 'BookingForm',
  components: { contactDetail, OurService, Step, BudgetForm, FinishForm, ButtonSubmit, ButtonBack, MessageError },
  data(): Data {
    return {
      step: 1,
      content: ['contact-detail', 'our-service', 'budget-form', 'finish-form'],
      contact: {
        name: '',
        email: '',
        phone: '',
        company: '',
      },
      service: '',
      budget: '',
      message: '',
    };
  },
  methods: {
    handleNext: function (): void {
      if (!this.step) return;
      switch (this.step) {
        case 1:
          if (checkEmptyOBJ(this.contact)) {
            this.message = 'some field is not valid !!';
            break;
          }
          this.step++;
          break;
        case 2:
          if (!this.service) {
            this.message = 'field service is not valid !!';
            break;
          }
          this.step++;
          break;
        case 3:
          if (!this.budget) {
            this.message = 'field budget is not valid !!';
            break;
          }
          this.step++;
          break;
        case 4:
          this.step++;
          break;
        default:
          break;
      }
    },

    handleback: function (): void {
      if (this.step <= 1) return;
      this.step--;
    },

    setContact: function (data: IContact): void {
      if (!checkEmptyOBJ(data)) {
        this.message = '';
        this.contact = { ...data };
        return;
      }
    },

    setService: function (service: string) {
      if (!service) return;
      this.message = '';
      this.service = service;
    },

    setBudget: function (budget: string) {
      if (!budget) return;
      this.message = '';
      this.budget = budget;
    },
    handleSubmit: function () {
      console.log({ ...this.$data });
      console.log({ ...this.$data.contact });
    },
  },
};
</script>
<style></style>
