import {FETCH_ARTICLES} from "./actions";

const initialState = {
    articles:[]
}


export const articlesReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_ARTICLES:
            return{
                ...state,
                articles: action.payload
            }

        default:
            return state
    }
}