import axios from "axios";

import { popularGamesURL, upcomingGamesURL, newGamesURL, gameSearchURL } from '../api'

export const loadGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        value: {
            popularGames: popularGamesData.data.results,
            newGames: newGamesData.data.results,
            upcomingGames: upcomingGamesData.data.results
        }
    })

}
export const searchGame = (game_name) => async (dispatch) => {
    if (!game_name) {
        dispatch({
            type: "FETCH_SEARCHED",
            value: {
                searched: []
            }
        })
    }
    else {
        const searchGameData = await axios.get(gameSearchURL(game_name));
        dispatch({
            type: "FETCH_SEARCHED",
            value: {
                searched: searchGameData.data.results
            }
        })
    }

}