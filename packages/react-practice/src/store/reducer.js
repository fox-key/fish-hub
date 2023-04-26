import {combineReducers} from "redux-immutable";

import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'
import {reducer as rankingReducer} from '../pages/discover/c-pages/ranking/store'
import {reducer as songReducer} from '../pages/discover/c-pages/songs/store'
import {reducer as djradioReducer} from '../pages/discover/c-pages/djradio/store'
const cReducer = combineReducers({
    recommend:recommendReducer,
    ranking:rankingReducer,
    songs:songReducer,
    djradio:djradioReducer
});


export default cReducer
