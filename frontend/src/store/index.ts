import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import registerPageReducer from './reducers/registerPage/reducer'
import { RegisterPageAction } from './reducers/registerPage/actions'


const rootReducer = combineReducers({
	registerPage: registerPageReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))


export type RootState = ReturnType<typeof store.getState>
export type Action = RegisterPageAction

export default store