export const incrementLikes =(number =5)=>{
    return{
        type: 'INCREMENT',
        payload: number
    }
}