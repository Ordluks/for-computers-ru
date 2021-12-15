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
		mouses: {
			id: 1,
			name: 'Мыши'
		},
		controllers: {
			id: 2,
			name: 'Контроллеры'
		},
		monitors: {
			id: 3,
			name: 'Мониторы'
		},
		others: {
			id: 4,
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
		}) ||
		['all', {id: -1, name: 'Все товары'}]
	}
}

const categoriesList = new CategoriesList()

export default categoriesList