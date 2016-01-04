/**
 * Created by yuluo on 16/1/4.
 */

import React, { Component, PropTypes } from 'react';

//////单个imgctrl
class ImgItemComponent extends Component{
    constructor(props, context) {
        super(props, context);
        //console.log(this.props);
    }
    handleDeleteImg(eve){
        eve.preventDefault();
        this.props.actions.delete_from_imgs(this.props.item); ////触发删除上传后的图片事件
    }

    render(){
        return(
            <li>
                <a href="javascript:void(0)"><img className="upload-end-img" src={this.props.item}/></a>
                <a className="my-close" href="javascript:void(0)" onClick={this.handleDeleteImg.bind(this)}>×</a>
            </li>
        )
    }
}
export default  ImgItemComponent;
