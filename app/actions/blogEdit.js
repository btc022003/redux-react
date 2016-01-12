/**
 * Created by yuluo on 16/1/4.
 */
import * as types from '../constants/ActionTypes'
import $ from 'jquery'

export function upload_cover_img(data){
    return {
        type:types.UPLOAD_COVER_IMG_END,
        data:data
    }
}

export function upload_img(data){
    return {
        type:types.UPLOAD_IMG_END,
        data:data
    }
    //return dispatch => {
    //    $.ajax({
    //        url: 'http://lixuanqi.com/api/v1/articles/get_articles_by_page.json?page=1',
    //        type: 'GET',
    //        dataType: 'json'
    //    }).done(function (res) {
    //        dispatch({
    //            type: types.UPLOAD_IMG_END,
    //            data: res.data
    //        })
    //        console.log("success");
    //    })
    //        .fail(function () {
    //            console.log("error");
    //        })
    //        .always(function () {
    //            console.log("complete");
    //        });
    //}
}

export function delete_from_imgs(data){
    return {
        type:types.DELETE_FROM_IMGS,
        data:data
    }
}

export function change_name(data){
    return {
        type:types.BLOG_NAME_EDIT,
        data:data
    }
}

export function change_description(data){
    return {
        type:types.BLOG_DESCRIPTION_EDIT,
        data:data
    }
}

export function change_content(data){
    return {
        type:types.BLOG_CONTENT_EDIT,
        data:data
    }
}

export function change_type(data){
    return {
        type:types.BLOG_TYPE_EDIT,
        data:data
    }
}

export function set_preview_visible(){
    return {
        type:types.SET_PREVIEW_VISIBLE,
        data:""
    }
}
