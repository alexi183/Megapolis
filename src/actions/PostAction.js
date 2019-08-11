import axios from "axios"
const url = 'https://test.megapolis-it.ru/api/list'

export const GET_DATA_PENDING = 'GET_DATA_PENDING'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_REJECT = 'GET_DATA_REJECT'

export const getData = () => {
   return (dispatch) => {
      dispatch({
         type: GET_DATA_PENDING
      })

      axios.get(url).then((response) => {
         dispatch({
            type: GET_DATA_SUCCESS,
            payload: response.data
         })
         // console.log('response-', response);
      })
          .catch((error) => {
             dispatch({
                type: GET_DATA_REJECT,
                payload: error
             })
          })
   }
}

export const ADD_POST_START = 'ADD_POST_START'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_REJECT = 'ADD_POST_REJECT'

export const addPost = (title) => {
   return (dispatch) => {
      dispatch({
         type: ADD_POST_START
      })

      /*   const postId = () => getState().post.data.data.length
         console.log('postLength-' , postId);*/

      const note = {
         // id: +Math.max(postId() + 1),
         title: title
      }

      axios.post(url, note).then(response => {
         console.log(response)
         dispatch({
            type: ADD_POST_SUCCESS
         })
      } )

      /* .then(func)*/
          .catch((error) => {
             dispatch({
                type: ADD_POST_REJECT,
                payload: error
             })
          });
   }
}




export const EDIT_POST = 'EDIT_POST'

export const editPost = (id) => ({
   type: EDIT_POST,
   payload: id
});


export const REMOVE_POST = 'REMOVE_POST'

export const removePost = (id) => ({
   type: REMOVE_POST,
   payload: id
});



