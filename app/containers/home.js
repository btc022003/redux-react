/**
 * Created by yuluo on 15/12/25.
 */
import React,{ Component,PropTypes } from 'react'
const { Link } = require('react-router');


///// <!--子路由的内容渲染在此处-->

export default class Home extends Component{

    render(){
        return(
            //<div className="row">
            //    <div className="col-12">
            //        <h1>Blogs</h1>
            //        <Link to="blog_new">发布</Link>
            //        <Link to="game">Game</Link>
            //        {this.props.children}
            //    </div>
            //</div>
            <div>
                {this.props.children}
            </div>
        )
    }

}