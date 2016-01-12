/**
 * Created by yuluo on 15/12/25.
 */
import * as types from '../constants/ActionTypes'
import $ from 'jquery'

export function load_blog_data() {
    return dispatch => {
        $.ajax({
            url: 'http://lixuanqi.com/api/v1/articles/get_articles_by_page.json?page=1',
            type: 'GET',
            dataType: 'json'
        }).done(function (res) {
            dispatch({
                type: types.LOAD_BLOG_DATA,
                data: res.data
            })
            console.log("success");
        })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    }
}

export function load_blog_detail(id) {
    return dispatch => {
        $.ajax({
            url: 'http://lixuanqi.com/api/v1/articles/get_article_detail.json?id=' + id,
            type: 'GET',
            dataType: 'json'
        }).done(function (res) {
            dispatch({
                type: types.LOAD_BLOG_DETAIL,
                data: res.data
            })
            console.log("success");
        })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    }
}
