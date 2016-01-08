/**
 * Created by yuluo on 16/1/8.
 */
import * as types from '../constants/ActionTypes'

export function on_timer(data){
    return {
        type:types.GAME_TIMER,
        data:data
    }
}

export function init_game_fish(data){
    return {
        type:types.GAME_INIT_FISH,
        data:data
    }
}