import { atom } from 'recoil'

const authState = atom({
  key: 'auth-state',
  default: null,
})

export default authState
