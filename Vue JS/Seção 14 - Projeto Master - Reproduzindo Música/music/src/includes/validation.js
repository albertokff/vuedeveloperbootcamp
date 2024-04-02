import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('passwords_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `O campo ${ctx.field} é obrigatório!`,
          min: `O campo ${ctx.field} é muito curto.`,
          max: `O campo ${ctx.field} é muito longo.`,
          alpha_spaces: `O campo ${ctx.field} pode conter somente caracteres alfabéticos e espaços.`,
          email: `O campo ${ctx.field} precisa conter um e-mail válido!`,
          min_value: `É obrigatório ser maior de 18 anos.`,
          max_value: `O valor informado para o campo ${ctx.field} é inválido!`,
          excluded: `O valor informado para o campo ${ctx.field} é inválido!`,
          country_excluded: `Usuários da localidade ${ctx.field} não estão sendo aceitos.`,
          passwords_mismatch: 'As senhas não conferem!',
          tos: 'Você precisa aceitar os termos de serviço!'
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `O campo ${ctx.field} é inválido!`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
