import * as actions from '../actions/PostAction';

const INITIAL_STATE = {
   data: [],
   title: '',
   isFetching: false,
   isFetched: false,
   error: null
}

const PostReducer = (state = INITIAL_STATE, action) => {

   switch (action.type) {

      case actions.GET_DATA_PENDING:
         return {
            ...state,
            isFetching: true
         }

      case actions.GET_DATA_REJECT:
         return {
            ...state,
            isFetching: true,
            error: action.payload
         }

      case actions.GET_DATA_SUCCESS:

         /*let productTypes = action.payload.filter(items => items.ParentID === null)*/

         return {
            ...state,
            isFetching: false,
            isFetched: true,
            data: action.payload
         }

      case actions.ADD_POST_START:
         return {
            ...state,
            isFetching: true
         }

      case actions.ADD_POST_SUCCESS:
         return {
            ...state,
            isFetching: false,
            isFetched: true,
            title: action.title
         }


      case actions.ADD_POST_REJECT:
         return {
            ...state,
            isFetching: true,
            error: action.payload
         }


      default: {
         return state;
      }
   }
};

export default PostReducer;
