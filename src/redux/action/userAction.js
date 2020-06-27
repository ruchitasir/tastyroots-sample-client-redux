
export const setReduxUser = (user=' hello hi')=>{
    return {
        type: 'SET_USER',
        payload: user
    }
}