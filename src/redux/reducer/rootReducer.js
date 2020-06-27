import { combineReducers } from 'redux'
import userReducer from './userReducer.js'
import likeRecipeReducer from './LikeRecipeReducer'
import reducer from '../user/UserFromDBReducer'

const rootReducer = combineReducers({
  
    user: userReducer,
    likeRecipe : likeRecipeReducer,
    userDB: reducer
  })
  
  export default rootReducer