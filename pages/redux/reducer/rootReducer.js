import quizReducer from './quizReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    quiz : quizReducer
})

export default rootReducer