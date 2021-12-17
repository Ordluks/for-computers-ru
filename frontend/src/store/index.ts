import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginPageReducer from './reducers/loginPageSlice'
import registerPageReducer from './reducers/registerPageSlice'
import userReducer from './reducers/userSlice'
import productPageReducer from './reducers/productPageSlice'
import productsPageReducer from './reducers/productsPageSlice'
import adminPanelPageReducer from './reducers/adminPanelPageSlice'
import mainPageReducer from './reducers/mainPageSlice'
import basketPageReducer from './reducers/bucketPageSlice'



const rootReducer = combineReducers({
	user: userReducer,
	mainPage: mainPageReducer,
	registerPage: registerPageReducer,
	loginPage: loginPageReducer,
	productPage: productPageReducer,
	productsPage: productsPageReducer,
	basketPage: basketPageReducer,
	adminPanelPage: adminPanelPageReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
