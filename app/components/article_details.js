/**
 * Created by yuluo on 15/12/25.
 */
import React, { Component, PropTypes } from 'react';
import { pushPath } from 'redux-simple-router'

class ArticlDetailsCtrl extends Component {
    constructor(props, context) {
        super(props, context);
        this.props.actions.load_blog_detail(this.props.location.query.id)
    }

    handleReturn(eve) {
        eve.preventDefault();
        const { dispatch } = this.props;
        dispatch(pushPath('/'));
    }

    render()
    {
        return (
            <div>
                <a target="_blank" href={this.props.blog_detail.url}>{this.props.blog_detail.title}</a>
                <br/>
                <a className="btn btn-info" onClick={this.handleReturn.bind(this)}>返回</a>
            </div>

        )
    }
}
export default ArticlDetailsCtrl;