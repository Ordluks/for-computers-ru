import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginPageReducer from './reducers/loginPageSlice'
import registerPageReducer from './reducers/registerPageSlice'
import userReducer from './reducers/userSlice'
import productsPageReducer from './reducers/productsPageSlice'


const rootReducer = combineReducers({
	user: userReducer,
	registerPage: registerPageReducer,
	loginPage: loginPageReducer,
	productsPage: productsPageReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
