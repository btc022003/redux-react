/**
 * Created by yuluo on 16/1/8.
 */
import pixi,{Rectangle} from 'pixi.js';
import * as types from '../constants/ActionTypes'


const initialState = {
    tilePosition:{x:0,y:0},
    fishs:[] ////小鱼数组,包含id和fish属性
};



export default function game(state = initialState,action){
    switch(action.type) {
        case "GAME_TIMER":
            state.tilePosition = {x:action.data*-10,y:action.data*-10};
            //console.log(state);


            for(let i=0;i<state.fishs.length;i++){
                let direction = state.fishs[i].fish.direction;
                let new_direction = direction + state.fishs[i].fish.turnSpeed * 0.01;

                let position = state.fishs[i].fish.position;
                let new_position = {
                    x: position.x + Math.sin(new_direction) * state.fishs[i].fish.speed,
                    y: position.y + Math.cos(new_direction) * state.fishs[i].fish.speed
                };
                if (new_position.x < state.fishs[i].fish.bounds.x)
                    new_position.x = new_position.x + state.fishs[i].fish.bounds.width;
                if (new_position.x > state.fishs[i].fish.bounds.x + state.fishs[i].fish.bounds.width)
                    new_position.x = new_position.x - state.fishs[i].fish.bounds.width

                if (new_position.y < state.fishs[i].fish.bounds.y)
                    new_position.y = new_position.y + state.fishs[i].fish.bounds.height;
                if (new_position.y > state.fishs[i].fish.bounds.y + state.fishs[i].fish.bounds.height)
                    new_position.y = new_position.y - state.fishs[i].fish.bounds.height
                let new_rotation = -new_direction - Math.PI / 2;


                state.fishs[i].fish.direction = new_direction;
                state.fishs[i].fish.position = new_position;
                state.fishs[i].fish.rotation = new_rotation;
            }
            return Object.assign({}, state);
            break;

        case "GAME_INIT_FISH":
            for(let i=0;i<10;i++) {
                state.fishs.push({
                    id: i, fish: {
                        anchor: {
                            x: 0.5,
                            y: 0.5
                        },
                        direction: Math.random() * Math.PI * 2,
                        speed: 2 + Math.random() * 2,
                        turnSpeed: Math.random() - 0.8,
                        position: {
                            x: Math.random() * action.data.bounds.width,
                            y: Math.random() * action.data.bounds.height
                        },
                        scale: {
                            x: action.data.scale,
                            y: action.data.scale
                        },
                        rotation: 0,
                        bounds: action.data.bounds
                    }
                })}
            return Object.assign({}, state);
            break;


        default :
            return state;
    }
}