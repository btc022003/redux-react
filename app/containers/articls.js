/**
 * Created by yuluo on 15/12/25.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as ArticlesActions from '../actions/blogs'
import ArticlsCtrl from '../components/articles'

class ArticlesApp extends Component{
    render(){
        const {blogs,dispatch,location} = this.props
        const actions = bindActionCreators(ArticlesActions,dispatch)
        return(
            <div>
                <ArticlsCtrl actions={actions} location={location} blogs={blogs}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        blogs : state.app.blogs.article_list
    }
}
export default connect(mapStateToProps)(ArticlesApp);