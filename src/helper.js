import playstation from './img/playstation.svg'
import nintendo from './img/nintendo.svg'
import xbox from './img/xbox.svg'
import gamepad from './img/gamepad.svg'
import apple from './img/apple.svg'
import steam from './img/steam.svg'
export const resizeImage = (imagePath, size) => {
    const path = imagePath.match('/media/screenshots') ?
        imagePath.replace('/media/screenshots', `/media/resize/${size}/-/screenshots`) :
        imagePath.replace('/media/games', `/media/resize/${size}/-/games`);
    return path;
}
// Change date format to dd-mm-yyyy
export const changeDateFormat = (date) => {
    const dateObj = new Date(date);
    let dateNumber = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    month = month < 10 ? `0${month}` : month;
    dateNumber = dateNumber < 10 ? `0${dateNumber}` : dateNumber;
    return `${dateNumber}-${month}-${year}`;
};
export const getPlatformLogo = (platform) => {
    switch (platform) {
        case 'PlayStation 4':
        case 'PlayStation 5':
            return playstation;
        case 'Xbox One':
        case 'Xbox Series S/X':
            return xbox;
        case 'Nintendo Switch':
            return nintendo;
        case 'iOS':
            return apple;
        case 'PC':
            return steam;
        default:
            return gamepad;
    }
}