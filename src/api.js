const base_url = "https://api.rawg.io/api/";

require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY


const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    return month < 10 ? `0${month}` : month;
}
const getCurrentDay = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}` : day;
}
const currentYear = () => { return new Date().getFullYear() }

const currentDate = `${currentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYear = `${currentYear() - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${currentYear() + 1}-${getCurrentMonth()}-${getCurrentDay()}`;

// URL creator
const popularGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;


// export complete URL's
export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`;
export const gameSearchURL = (game_name) => `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=6`;
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;
