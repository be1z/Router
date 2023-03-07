import * as veevaildate from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import { object } from 'yup'
import yup from './yup'
function definRoules() {
  Object.keys(rules).forEach((value) => {
    veevaildate.defineRule(value, rules[value])
  })
}
definRoules()

veevaildate.configure({
  validateOnInput: true,
  generateMessage: localize('zh_CN', zh_CN),
})

const modules = { yup, ...veevaildate, rules }

export default modules
