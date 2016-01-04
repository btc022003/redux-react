/**
 * Created by yuluo on 16/1/4.
 */
import React, { Component, PropTypes } from 'react';

import $ from 'jquery'

class UploadImgCtrl extends Component {

    constructor(props, context) {
        super(props, context);
        var that = this;
        $("#single_image").bind("change",function(){
            lrz(this.files[0], { width: 800 })
                .then(function (rst) {
                    that.props.actions.upload_cover_img(rst.base64);
                    //// 处理成功会执行
                    //$.ajax({
                    //    url: "/tools/upload_ajax.ashx?action=UploadBase64",
                    //    type: "POST",
                    //    data: { Filedata: rst.base64.split(",")[1] },
                    //    success: function (msg) {
                    //        var url = msg.path;
                    //        ManyImgsActions.addImg(url);
                    //    },
                    //    error: function (err) {
                    //        console.log(err);
                    //    }
                    //});
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

    handleUploadCoverImg(eve){
        eve.preventDefault();
        $("#single_image").click();
    }

    render(){
        return(
            <div>
                <label className="control-label">封面图片</label>
                <img className="upload-end-img" src={this.props.data.cover_img}/>
                <a className="btn" onClick={this.handleUploadCoverImg.bind(this)}>上传图片</a>
            </div>
        )
    }
}

export default UploadImgCtrl;