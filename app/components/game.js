/**
 * Created by yuluo on 16/1/7.
 */
import React, { Component, PropTypes } from 'react';


import pixi,{Rectangle} from 'pixi.js';
import { Stage, Sprite, VectorText, DisplayObjectContainer,TilingSprite } from 'react-pixi';


////鱼
class Fish extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log("-------fish init");
        console.log(this.props);
        this.skin = require('./displacement_fish1.png');
        switch (this.props.fishId) {
            case 1:
                this.skin = require('./displacement_fish1.png')
                break;
            case 2:
                this.skin = require('./displacement_fish2.png')
                break;
            case 3:
                this.skin = require('./displacement_fish3.png')
                break;
            case 4:
                this.skin = require('./displacement_fish4.png')
                break;
            default:
                this.skin = require('./displacement_fish1.png')
                break;
        }



        //AnimationStore.addChangeListener(this.animationHandler.bind(this));
    }

    //componentWillMount() {
    //
    //}

    render() {
        return (<Sprite anchor={this.props.data.fishs[this.props.fishId].fish.anchor}
                        rotation={this.props.data.fishs[this.props.fishId].fish.rotation}
                        speed={this.props.data.fishs[this.props.fishId].fish.speed}
                        direction={this.props.data.fishs[this.props.fishId].fish.direction}
                        turnSpeed={this.props.data.fishs[this.props.fishId].fish.turnSpeed}
                        position={this.props.data.fishs[this.props.fishId].fish.position}
                        scale={this.props.data.fishs[this.props.fishId].fish.scale}
                        image={this.skin} />);
    }
}

Fish.propTypes = {
};

//////背景
class Background extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let scale = {
            x: 1.3,
            y: 1.3
        };
        return (<Sprite scale={scale} key='bg' image={require('./Background.jpg')} />);
    }
}

Background.propTypes = {
};


/////时间计数器
var ticks = 1;
var actions = {};

/////水纹
class Overlay extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.animationHandler();
        actions = this.props.actions;
    }



    animationHandler() {

        //console.log("---------");
        //console.log(this.props);

        setInterval(this.tickHandle,50);
        //let tick = //AnimationStore.get('tick');

    }
    tickHandle(){
        ticks = ticks+1;
        let count = ticks / 10;
        actions.on_timer(count);
    }

    render() {
        return (<TilingSprite tilePosition={this.props.data.tilePosition} alpha={0.1} width={window.innerWidth} height={window.innerHeight} key='Overlay' image={require('./zeldaWaves.png')} />);
    }
}

Overlay.propTypes = {
};

class GameCtrl extends Component{
    constructor(props, context) {
        super(props, context);
        let padding = 50;
        this.bounds = new Rectangle(-padding, -padding, window.innerWidth + padding * 2, window.innerHeight + padding * 2);
        let scale = 0.4 + Math.random() * 0.3;
        this.props.actions.init_game_fish({bounds:this.bounds,scale:scale});
    }

    renderFish() {
        let fishs = [];
        for (var i = 0; i < 10; i++) {
            fishs.push(<Fish key={i} fishId={i} data={this.props.data} actions={this.props.actions}/>)
        }
        return fishs;
    }

    render(){
        console.log("width:"+window.innerWidth);

        const {data,actions} = this.props;
        return (

            <Stage ref='stage'  width={this.props.width} height={this.props.height}>
                <DisplayObjectContainer ref='app'>
                    <Background data={data} actions={actions} width={10} height={20}/>
                    { this.renderFish() }
                    <Overlay data={data} actions={actions}/>
                </DisplayObjectContainer>
            </Stage>
        );
    }
}
export default GameCtrl;

