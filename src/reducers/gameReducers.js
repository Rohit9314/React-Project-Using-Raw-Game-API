const initialState = {
    popular: [],
    newGames: [],
    upcomingGames: [],
    isGameLoading: true,
    searched: []
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.value.popularGames,
                newGames: action.value.newGames,
                upcomingGames: action.value.upcomingGames,
                isGameLoading: false
            }
        case "LOAD_GAMES":
            return {
                ...state,
                isGameLoading: true
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.value.searched,
            }
        default:
            return { ...state }
    }
}

export default gameReducer;