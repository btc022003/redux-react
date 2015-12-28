/**
 * Created by yuluo on 15/12/25.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as ArticlesActions from '../actions/blogs'
import ArticlDetailsCtrl from '../components/article_details'

class ArticleDetailsApp extends Component{
    render(){
        const {blog_detail,dispatch,location} = this.props
        const actions = bindActionCreators(ArticlesActions,dispatch)
        return(
            <div>
                <ArticlDetailsCtrl blog_detail={blog_detail} actions={actions} dispatch={dispatch} location={location}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        blog_detail : state.app.blogs.current_article
    }
}
export default connect(mapStateToProps)(ArticleDetailsApp);