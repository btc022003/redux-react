/**
 * Created by yuluo on 15/12/25.
 */
import { combineReducers } from 'redux';
import blogs from './blogs'
import blog_new from './blogEdit'
import game from './game'
const rootReducer = combineReducers({
    blogs,
    blog_new,
    game
});

export default rootReducer;