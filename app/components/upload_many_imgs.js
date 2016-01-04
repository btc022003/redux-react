/**
 * Created by yuluo on 16/1/4.
 */
import React, { Component, PropTypes } from 'react';

import $ from 'jquery'

import ImgItemComponent from './upload_many_item'


class UploadManyImgCtrl extends Component {

    constructor(props, context) {
        super(props, context);
        var that = this;
        $("#many_image").bind("change",function(){
            lrz(this.files[0], { width: 800 })
                .then(function (rst) {
                    that.props.actions.upload_img(rst.base64);
                })
                .catch(function (err) {
                    // 处理失败会执行
                    console.log(err);
                })
                .always(function () {
                    // 不管是成功失败，都会执行
                });
        })
    }

    handleUploadImg(eve){
        eve.preventDefault();
        $("#many_image").click(); /////点击上传按钮后触发single_image的click事件,jquery方法触发
    }

    render(){
        var that = this;
        let i =0;
        return(
            <ul>
                {
                    that.props.data.img_list.map(function(item){
                        //console.log(item);
                        i=i+1;
                        return(
                            <ImgItemComponent key={i} item={item} data={that.props.data} actions={that.props.actions}/>
                        )
                    })}
                <li><a onClick={this.handleUploadImg.bind(this)} className="qingjian_addbtn" href="javascript:void(0)">+</a></li>
            </ul>
        )
    }
}



export default UploadManyImgCtrl;

