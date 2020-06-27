import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './UserFromDBActionTypes'


export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
  export const fetchUsersSuccess = user => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: user
    }
  }
  
  export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }
  

  export const fetchUser = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest())
      let token = localStorage.getItem('boilerToken')
      axios
        .get(process.env.REACT_APP_SERVER_URL + 'profile', {
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
        .then(response => {
          // response.data is the users
          const user = response.data
          dispatch(fetchUsersSuccess(user))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }
  