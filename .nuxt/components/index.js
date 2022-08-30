export { default as BookingForm } from '../../components/bookingForm.vue'
export { default as MessageError } from '../../components/messageError.vue'
export { default as Step } from '../../components/step.vue'
export { default as ButtonBack } from '../../components/button/buttonBack.vue'
export { default as ButtonSubmit } from '../../components/button/buttonSubmit.vue'
export { default as FormBudgetForm } from '../../components/form/budgetForm.vue'
export { default as FormContactDetail } from '../../components/form/contactDetail.vue'
export { default as FormFinishForm } from '../../components/form/finishForm.vue'
export { default as FormOurService } from '../../components/form/ourService.vue'
export { default as CardBudgetCard } from '../../components/card/budgetCard.vue'
export { default as CardServiceCard } from '../../components/card/serviceCard.vue'
export { default as IconsCompany } from '../../components/icons/company.vue'
export { default as IconsMail } from '../../components/icons/mail.vue'
export { default as IconsMaketing } from '../../components/icons/maketing.vue'
export { default as IconsPhone } from '../../components/icons/phone.vue'
export { default as IconsSetting } from '../../components/icons/setting.vue'
export { default as IconsTerminal } from '../../components/icons/terminal.vue'
export { default as IconsUser } from '../../components/icons/user.vue'
export { default as IconsWeb } from '../../components/icons/web.vue'
export { default as Input } from '../../components/input/input.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
