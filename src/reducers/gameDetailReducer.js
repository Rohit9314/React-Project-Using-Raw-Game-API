const initialState = {
    selectedGameDetail: {},
    screen: {},
    isGameDetailLoading: true
}

const gameDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_GAME_DETAILS":
            return {
                ...state,
                isGameDetailLoading: true
            }
        case "GET_GAME_DETAIL":
            return {
                ...state,
                selectedGameDetail: action.value.gameDetails,
                screen: action.value.screen,
                isGameDetailLoading: false
            }
        default:
            return { ...state }
    }
}
export default gameDetailReducer;