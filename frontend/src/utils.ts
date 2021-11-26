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

export const getCookieByName = (name: string) => {
	const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
		const poped = parts.pop()
		if (poped) return poped.split(';').shift()
	}
}