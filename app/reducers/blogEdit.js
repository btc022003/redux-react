/**
 * Created by yuluo on 16/1/4.
 */
import * as types from '../constants/ActionTypes'
const initialState = {
    title:"",
    description:"",
    cover_img:"",
    content:"",
    img_list:[],
    types:{},
    preview_visible:true,
    btn_preview:"隐藏"
};

export default function blog_new(state = initialState,action){
    switch(action.type) {
        case types.UPLOAD_IMG_END:
            state.img_list.push(action.data);
            ////console.log(state);
            return Object.assign({}, state);


        case types.DELETE_FROM_IMGS:
            alert("del");
            let arr = [];
            //state.img_list.map(function(i){
            //    if(i!= action.data){
            //        arr.push(i);
            //    }
            //});
            /////使用es6中数组的扩展方法filter进行筛选
            arr = state.img_list.filter(x=>x!=action.data);
            state.img_list = arr;
            ////console.log(state);
            return Object.assign({}, state);

        case types.UPLOAD_COVER_IMG_END:
            state.cover_img = action.data;
            //console.log(state);
            return Object.assign({}, state);

        case types.BLOG_NAME_EDIT:
            state.title = action.data;
            return Object.assign({}, state);

        case types.BLOG_CONTENT_EDIT:
            state.content = action.data;
            return Object.assign({}, state);

        case types.BLOG_DESCRIPTION_EDIT:
            state.description = action.data;
            return Object.assign({}, state);

        case types.BLOG_TYPE_EDIT:
            state.types = action.data;
            return Object.assign({}, state);

        case types.SET_PREVIEW_VISIBLE:
            //state.preview_visible = !state.preview_visible
            //state.btn_preview = state.preview_visible?"隐藏":"显示"
            return Object.assign({}, state,{preview_visible:!state.preview_visible,btn_preview:state.preview_visible?"显示":"隐藏"});

        default:
            return state;
    }
}

