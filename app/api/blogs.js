/**
 * Created by yuluo on 16/2/2.
 */
import * as types from '../constants/ActionTypes'
import $ from 'jquery'

export default class BlogsApi {

    constructor(){

    }

    /////分页方式加载数据
    load_data(dispatch, page_index = 1) {
        $.ajax({
            url: 'http://lixuanqi.com/api/v1/articles/get_articles_by_page.json?page=' + page_index,
            type: 'GET',
            dataType: 'json'
        }).done(function (res) {
            dispatch({
                type: types.LOAD_BLOG_DATA,
                data: res
            });
            console.log("success");
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });

    }

    load_blog_detail(dispatch,id){
        $.ajax({
            url: 'http://lixuanqi.com/api/v1/articles/get_article_detail.json?id=' + id,
            type: 'GET',
            dataType: 'json'
        }).done(function (res) {
            dispatch({
                type: types.LOAD_BLOG_DETAIL,
                data: res.data
            });
            console.log("success");
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });
    }
}

//
//export default BlogsApi;