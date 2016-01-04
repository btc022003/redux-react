/**
 * Created by yuluo on 16/1/4.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as BlogNewActions from '../actions/blogEdit'
import BlogNewCtrl from '../components/blog_new'

class BlogNewApp extends Component{
    render(){
        const {data,dispatch,location} = this.props
        const actions = bindActionCreators(BlogNewActions,dispatch)
        return(
            <div>
                <BlogNewCtrl actions={actions} location={location} data={data}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        data : state.app.blog_new
    }
}
export default connect(mapStateToProps)(BlogNewApp);