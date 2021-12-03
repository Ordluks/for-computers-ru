export type Category = {
	id: number
	name: string
}


class CategoriesList {
	private list: {[key: string]: Category} = {
		keybords: {
			id: 0,
			name: 'Клавиатуры'
		},
		controllers: {
			id: 1,
			name: 'Контроллеры'
		},
		monitors: {
			id: 2,
			name: 'Мониторы'
		},
		others: {
			id: 3,
			name: 'Другое'
		}
	}

	getCategoriesList() {
		return Object.entries(this.list)
	}

	getCategory(id?: number | string) {
		return Object.entries(this.list).find(value => {
			const [ textId, category ] = value
			return id === textId || id === category.id
		})
	}
}

const categoriesList = new CategoriesList()

export default categoriesList