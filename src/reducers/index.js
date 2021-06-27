import { combineReducers } from "redux";

import gameReducer from "./gameReducers";
import gameDetail from "./gameDetailReducer"

const rootReducer = combineReducers({
    games: gameReducer,
    gameDetail: gameDetail
})

export default rootReducer;