const initialState = {
    numOfLikes: 0
}

const likeRecipeReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'INCREMENT': return {
          ...state,
          numOfLikes: state.numOfLikes + action.payload
        }
    
        default: return state
      }

}

export default likeRecipeReducer