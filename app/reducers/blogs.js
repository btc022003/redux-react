/**
 * Created by yuluo on 15/12/25.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    article_list:[],
    current_article:{}
};

export default function blogs(state = initialState,action){
    switch(action.type) {
        case types.LOAD_BLOG_DATA:
            state.article_list = action.data
            //console.log(state)
            return Object.assign({}, state);

        case types.LOAD_BLOG_DETAIL:
            state.current_article = action.data
            //console.log(state)
            return Object.assign({}, state);

        default:
            return state;
    }
}