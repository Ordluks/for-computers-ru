import * as actionTypes from './actionTypes'


type ChangeFirstNameTextAction = {
  type: typeof actionTypes.CHANGE_FIRST_NAME_TEXT,
  text: string
}
export const changeFirstNameText = (text: string): ChangeFirstNameTextAction => ({
  type: actionTypes.CHANGE_FIRST_NAME_TEXT, text
})


type ChangeLastNameTextAction = {
  type: typeof actionTypes.CHANGE_LAST_NAME_TEXT,
  text: string
}
export const changeLastNameText = (text: string): ChangeLastNameTextAction => ({
  type: actionTypes.CHANGE_LAST_NAME_TEXT, text
})


type ChangeEmailTextAction = {
  type: typeof actionTypes.CHANGE_EMAIL_TEXT,
  text: string
}
export const changeEmailNameText = (text: string): ChangeEmailTextAction => ({
  type: actionTypes.CHANGE_EMAIL_TEXT, text
})


type ChangePasswordTextAction = {
  type: typeof actionTypes.CHANGE_PASSWORD_TEXT,
  text: string
}
export const changePasswordText = (text: string): ChangePasswordTextAction => ({
  type: actionTypes.CHANGE_PASSWORD_TEXT, text
})


type ShowPasswordAction = {
  type: typeof actionTypes.SHOW_PASSWORD
}
export const showPassword = (): ShowPasswordAction => ({
  type: actionTypes.SHOW_PASSWORD
})


type HidePasswordAction = {
  type: typeof actionTypes.HIDE_PASSWORD
}
export const hidePassword = (): HidePasswordAction => ({
  type: actionTypes.HIDE_PASSWORD
})


export type RegisterPageAction =
ChangeFirstNameTextAction |
ChangeLastNameTextAction |
ChangeEmailTextAction |
ChangePasswordTextAction |
ShowPasswordAction |
HidePasswordAction
