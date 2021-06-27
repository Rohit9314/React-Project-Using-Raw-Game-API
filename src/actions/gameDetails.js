import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";


const loadGameDetails = (id) => async (dispatch) => {
    dispatch({ "type": "LOAD_GAME_DETAILS" });
    const gameDetailData = await axios.get(gameDetailsURL(id));
    const gameScreenshotData = await axios.get(gameScreenshotURL(id));

    dispatch({
        "type": "GET_GAME_DETAIL",
        value: {
            gameDetails: gameDetailData.data,
            screen: gameScreenshotData.data
        }
    })
}
export default loadGameDetails;