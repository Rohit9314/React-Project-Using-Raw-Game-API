import styled from 'styled-components';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { changeDateFormat, resizeImage } from '../helper';
// Redux
import { useDispatch } from 'react-redux'
import loadGameDetails from '../actions/gameDetails';


const Game = ({ gameName, releasedDate, game_id, image }) => {
    const dispatch = useDispatch();
    const loadGameDetailHandler = () => {
        dispatch(loadGameDetails(game_id));
        document.body.style.overflow = 'hidden';
    }

    return (
        <StyledGame onClick={() => loadGameDetailHandler()}>
            <Link to={`/game/${game_id}`}>
                <h3>{gameName}</h3>
                <p>{changeDateFormat(releasedDate)}</p>
                <img src={resizeImage(image, 1280)} alt={gameName} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    cursor: pointer;
`
export default Game