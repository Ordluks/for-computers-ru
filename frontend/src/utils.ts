import { passwordStrength, Options } from 'check-password-strength'


export const checkPasswordStrenght = (password: string) => {
	const options: Options<string> = [
		{
			id: 0,
			value: "Очень слабый",
			minDiversity: 0,
			minLength: 0
		},
		{
			id: 1,
			value: "Слабый",
			minDiversity: 1,
			minLength: 6
		},
		{
			id: 2,
			value: "Средний",
			minDiversity: 2,
			minLength: 8
		},
		{
			id: 3,
			value: "Сильный",
			minDiversity: 4,
			minLength: 10
		}
	]

	return passwordStrength(password, options)
}

export const validateEmail = (email: string) => {
	return (/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/gm).test(email)
}

export const getCookieByName = (name: string) => {
	const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
		const poped = parts.pop()
		if (poped) return poped.split(';').shift()
	}
}

export const subPercent = (num: number, persent: number) => num - Math.round(num / 100 * persent)

export const splitNumber = (value: number) => {
	const strValue = String(value)
	let splitedValue = ''
	let part = ''
	for (let i = strValue.length - 1; i >= 0 ; i--) {
		const digit = strValue[i]
		part += digit
		
		if (i === 0) {
			splitedValue += part
		}
		else if (part.length === 3) {
			splitedValue += part + ' '
			part = ''
		}
	}
	return splitedValue.split('').reverse().join('')
}