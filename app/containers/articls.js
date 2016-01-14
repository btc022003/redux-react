/**
 * Created by yuluo on 15/12/25.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as ArticlesActions from '../actions/blogs'
import ArticlsCtrl from '../components/articles'
const { Link } = require('react-router');

class ArticlesApp extends Component{
    render(){
        const {blogs,dispatch,location,current_page,total_pages} = this.props
        const actions = bindActionCreators(ArticlesActions,dispatch)
        return(
            <div>
                <h1>Blogs</h1>
                <Link to="blog_new">发布</Link>
                <Link to="game">Game</Link>
                <ArticlsCtrl actions={actions} location={location} current_page={current_page} blogs={blogs} total_pages={total_pages}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        blogs : state.app.blogs.article_list,
        current_page :state.app.blogs.current_page,
        total_pages:state.app.blogs.total_pages
    }
}
export default connect(mapStateToProps)(ArticlesApp);