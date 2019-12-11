import {APP_CONSTANTS} from '../constants/appConstants';

export default function galleryReducer(state=null, action){
    switch(action.type){
        case APP_CONSTANTS.GET_DETAILS:
            return  Object.assign({}, state, {products: action.payload});
        default:
        return state;
    }
    return state;
}
