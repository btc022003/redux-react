/**
 * Created by yuluo on 15/12/25.
 */
import * as types from '../constants/ActionTypes'

////////article_list文章数组
///////current_article当前文章 详情页使用
//////current_page 分页当前的页码
/////total_pages  总页数
const initialState = {
    article_list:[],
    current_article:{},
    current_page:0,
    total_pages:1
};

export default function blogs(state = initialState,action){
    switch(action.type) {
        case types.LOAD_BLOG_DATA:
            action.data.data.map(item=>state.article_list.push(item));
            //console.log(state)
            state.current_page = state.current_page+1;
            state.total_pages = action.data.total_pages;
            //state.
            return Object.assign({}, state);

        case types.LOAD_BLOG_DETAIL:
            state.current_article = action.data
            //console.log(state)
            return Object.assign({}, state);


        default:
            return state;
    }
}