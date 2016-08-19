/**
 * Created by yuluo on 15/12/25.
 */
import * as types from '../constants/ActionTypes'
import $ from 'jquery'

import BlogsApi from '../api/blogs'

/////分页方式加载数据
//function load_data(dispatch,page_index=1){
//        $.ajax({
//            url: 'http://lixuanqi.com/api/v1/articles/get_articles_by_page.json?page='+page_index,
//            type: 'GET',
//            dataType: 'json'
//        }).done(function (res) {
//            dispatch({
//                type: types.LOAD_BLOG_DATA,
//                data: res
//            });
//            console.log("success");
//        }).fail(function () {
//            console.log("error");
//        }).always(function () {
//            console.log("complete");
//        });
//
//}
/////初始化列表数据
export function load_blog_data() {
    return dispatch => BlogsApi.prototype.load_data(dispatch)
}

/////加载更多
export function load_more(page_index){
    return dispatch => BlogsApi.prototype.load_data(dispatch,page_index)
}

//////获取文章详情
export function load_blog_detail(id) {
    return dispatch => BlogsApi.prototype.load_blog_detail(dispatch,id)
    //return dispatch => {
    //    $.ajax({
    //        url: 'http://lixuanqi.com/api/v1/articles/get_article_detail.json?id=' + id,
    //        type: 'GET',
    //        dataType: 'json'
    //    }).done(function (res) {
    //        dispatch({
    //            type: types.LOAD_BLOG_DETAIL,
    //            data: res.data
    //        });
    //        console.log("success");
    //    }).fail(function () {
    //        console.log("error");
    //    }).always(function () {
    //        console.log("complete");
    //    });
    //}
}
