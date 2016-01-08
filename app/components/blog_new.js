/**
 * Created by yuluo on 16/1/4.
 */
import React, { Component, PropTypes } from 'react';

import UploadImgCtrl from './upload_img'

import UploadManyImgCtrl from './upload_many_imgs'

import $ from 'jquery'

class BlogNewCtrl extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleNameChange(eve) {
        eve.preventDefault();
        this.props.actions.change_name(eve.target.value);
    }

    handleDescriptionChange(eve) {
        eve.preventDefault();
        this.props.actions.change_description(eve.target.value);
    }

    handleContentChange(eve) {
        eve.preventDefault();
        this.props.actions.change_content(eve.target.value);
    }
    handleEnd(eve){
        ///////refs获取控件
        console.log(this.refs);
        console.log(this.refs.txt_desc.value);
    }


    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="control-label">标题</label>
                    <input type="text" className="form-control" onChange={this.handleNameChange.bind(this)}
                           placeholder="标题"/>
                    <div className="help-block with-errors Validform_checktip"></div>
                </div>
                <div className="form-group">
                    <label className="control-label">简介</label>
                    <input ref="txt_desc" type="text" className="form-control" onChange={this.handleDescriptionChange.bind(this)}
                           placeholder="简介"/>
                    <div className="help-block with-errors Validform_checktip"></div>
                </div>
                <div>
                    <UploadImgCtrl actions={this.props.actions} data={this.props.data}/>
                </div>
                <div>
                    <UploadManyImgCtrl actions={this.props.actions} data={this.props.data}/>
                </div>
                <div className="form-group">
                    <label className="control-label">详情</label>
                    <textarea rows="3" cols="20" className="form-control" onChange={this.handleContentChange.bind(this)}
                              placeholder="详情"></textarea>
                    <div className="help-block with-errors Validform_checktip"></div>
                </div>

                <div>
                    <a href="javascript:void(0)" onClick={this.handleEnd.bind(this)}>submit</a>
                </div>

                <div>
                    <h1>{this.props.data.title}</h1>

                    <p>{this.props.data.content}</p>
                    {
                        this.props.data.img_list.map(function(item) {
                            return (<p><img src={item}/></p>)
                        })
                    }
                </div>
            </div>
        )
    }
}
export default BlogNewCtrl;