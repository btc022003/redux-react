/**
 * Created by yuluo on 15/12/25.
 */
import React, { Component, PropTypes } from 'react';
const { Link } = require('react-router');
class ArticlsCtrl extends Component {
    constructor(props, context) {
        super(props, context)
        if (this.props.blogs.length == 0) {
            this.props.actions.load_blog_data()
        }
        else {
            console.log("数据已加载");
        }
    }
    render()
    {
        return (
            <ul>
                {this.props.blogs.map(function (item) {
                    const str = "article_detail?id="+item.id
                    return (<li key={item.id}>{item.title}<Link to={str}>详情</Link></li>)
                })}
            </ul>
        )
    }
}
export default ArticlsCtrl;