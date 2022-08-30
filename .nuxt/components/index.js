export const BookingForm = () => import('../../components/bookingForm.vue' /* webpackChunkName: "components/booking-form" */).then(c => wrapFunctional(c.default || c))
export const MessageError = () => import('../../components/messageError.vue' /* webpackChunkName: "components/message-error" */).then(c => wrapFunctional(c.default || c))
export const Step = () => import('../../components/step.vue' /* webpackChunkName: "components/step" */).then(c => wrapFunctional(c.default || c))
export const ButtonBack = () => import('../../components/button/buttonBack.vue' /* webpackChunkName: "components/button-back" */).then(c => wrapFunctional(c.default || c))
export const ButtonSubmit = () => import('../../components/button/buttonSubmit.vue' /* webpackChunkName: "components/button-submit" */).then(c => wrapFunctional(c.default || c))
export const FormBudgetForm = () => import('../../components/form/budgetForm.vue' /* webpackChunkName: "components/form-budget-form" */).then(c => wrapFunctional(c.default || c))
export const FormContactDetail = () => import('../../components/form/contactDetail.vue' /* webpackChunkName: "components/form-contact-detail" */).then(c => wrapFunctional(c.default || c))
export const FormFinishForm = () => import('../../components/form/finishForm.vue' /* webpackChunkName: "components/form-finish-form" */).then(c => wrapFunctional(c.default || c))
export const FormOurService = () => import('../../components/form/ourService.vue' /* webpackChunkName: "components/form-our-service" */).then(c => wrapFunctional(c.default || c))
export const CardBudgetCard = () => import('../../components/card/budgetCard.vue' /* webpackChunkName: "components/card-budget-card" */).then(c => wrapFunctional(c.default || c))
export const CardServiceCard = () => import('../../components/card/serviceCard.vue' /* webpackChunkName: "components/card-service-card" */).then(c => wrapFunctional(c.default || c))
export const IconsCompany = () => import('../../components/icons/company.vue' /* webpackChunkName: "components/icons-company" */).then(c => wrapFunctional(c.default || c))
export const IconsMail = () => import('../../components/icons/mail.vue' /* webpackChunkName: "components/icons-mail" */).then(c => wrapFunctional(c.default || c))
export const IconsMaketing = () => import('../../components/icons/maketing.vue' /* webpackChunkName: "components/icons-maketing" */).then(c => wrapFunctional(c.default || c))
export const IconsPhone = () => import('../../components/icons/phone.vue' /* webpackChunkName: "components/icons-phone" */).then(c => wrapFunctional(c.default || c))
export const IconsSetting = () => import('../../components/icons/setting.vue' /* webpackChunkName: "components/icons-setting" */).then(c => wrapFunctional(c.default || c))
export const IconsTerminal = () => import('../../components/icons/terminal.vue' /* webpackChunkName: "components/icons-terminal" */).then(c => wrapFunctional(c.default || c))
export const IconsUser = () => import('../../components/icons/user.vue' /* webpackChunkName: "components/icons-user" */).then(c => wrapFunctional(c.default || c))
export const IconsWeb = () => import('../../components/icons/web.vue' /* webpackChunkName: "components/icons-web" */).then(c => wrapFunctional(c.default || c))
export const Input = () => import('../../components/input/input.vue' /* webpackChunkName: "components/input" */).then(c => wrapFunctional(c.default || c))

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
