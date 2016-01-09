/**
 * Created by yuluo on 16/1/7.
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as GameActions from '../actions/game'
import GameCtrl from '../components/game'

class GameApp extends Component{
    render(){
        //console.log("width:"+this.props.width);
        const {data,dispatch} = this.props;
        const actions = bindActionCreators(GameActions,dispatch);
        return(
            <div>
                <GameCtrl width={window.innerWidth} height={window.innerHeight} data={data} actions={actions}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        data : state.app.game
    }
}

export default connect(mapStateToProps)(GameApp);