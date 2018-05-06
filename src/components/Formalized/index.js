import formalize from './formalize'
import { isEmail, isLength, isURL } from 'validator'

const Formalized = formalize([
  {
    name: 'email',
    type: 'email',
    validators: [[({ email }) => isEmail(email), 'Email is invalid']]
  },
  {
    name: 'password',
    type: 'password',
    validators: [
      [
        ({ password }) => isLength(password, { min: 6, max: 60 }),
        'Password must be between 6 and 60 characters'
      ]
    ]
  },
  {
    name: 'passwordConfirm',
    type: 'password',
    validators: [
      [
        ({ passwordConfirm, password }) => password === passwordConfirm,
        'Password confirmation does not match password'
      ]
    ]
  },
  {
    name: 'feedName',
    validators: [
      [
        ({ feedName }) => isLength(feedName, { min: 4, max: 12 }),
        'Feed name must be between 4 and 12 characters'
      ]
    ]
  },
  {
    name: 'threadLink',
    validators: [
      [({ threadLink }) => isURL(threadLink), 'Thread link must be a url']
    ]
  }
])()

export default Formalized
