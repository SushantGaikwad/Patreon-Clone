import * as types from './actiontype'


const initialState ={
    loading:false,
    currentUser:null,
    error:null
};

export const userReducer = (state = initialState,action) => {
    console.log(action)
    switch (action.type) {
         case types.REGISTER_START:
             return {
                 ...state,
                 loading:true   
             }
         case types.REGISTER_SUCCESS:
             return {
                 ...state,
                 loading:false,
                 currentUser: action.payload,
             }
         case types.REGISTER_FAIL:
             return {
                 ...state,
                 loading:false,
                 error: action.payload,
             }
        default:
            return state
    }
}