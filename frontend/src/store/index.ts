import { combineReducers, configureStore } from '@reduxjs/toolkit'
import registerPageReducer from './reducers/registerPageSlice'


const rootReducer = combineReducers({
	registerPage: registerPageReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
