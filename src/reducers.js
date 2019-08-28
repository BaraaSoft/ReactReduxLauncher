import { combineReducers } from 'redux'
import * as HrisReducers from './hris/reducers';


export default combineReducers({
    ...HrisReducers
});