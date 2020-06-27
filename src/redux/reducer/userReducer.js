const initialState = {
    userStr: 'Added' 
   
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return{
                userStr: state.userStr+ action.payload
            }
        default: return state
    }
  }

  export default reducer