import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router";
// Styling
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Game from "../components/Games";
import GameDetail from "../components/GameDetails";
import { PS4Loader } from "../components/LoadingComponent";

const Home = () => {
  // Initialise State
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, upcomingGames, isGameLoading, searched } =
    useSelector((state) => state.games);
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <>
      {!isGameLoading ? (
        <GameList>
          {searched.length ? (
            <div className="searchedGame">
              <h2>Searched Games</h2>
              {pathId && <GameDetail />}
              <Games>
                {searched.map((game) => (
                  <Game
                    gameName={game.name}
                    releasedDate={game.released}
                    key={game.id}
                    game_id={game.id}
                    image={game.background_image}
                  />
                ))}
              </Games>
            </div>
          ) : (
            " "
          )}
          <h2>Upcoming Games</h2>
          {pathId && <GameDetail />}

          <Games>
            {upcomingGames.map((game) => (
              <Game
                gameName={game.name}
                releasedDate={game.released}
                key={game.id}
                game_id={game.id}
                image={game.background_image}
              />
            ))}
          </Games>
          <h2>Popular Games</h2>
          <Games>
            {popular.map((game) => (
              <Game
                gameName={game.name}
                releasedDate={game.released}
                key={game.id}
                game_id={game.id}
                image={game.background_image}
              />
            ))}
          </Games>
          {/* <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            gameName={game.name}
            releasedDate={game.released}
            key={game.id}
            game_id={game.id}
            image={game.background_image}
          />
        ))}
      </Games> */}
        </GameList>
      ) : (
        <PS4Loader iconColor={"#838A8A"} />
      )}
    </>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  @media (max-width: 768px) {
    padding: 0rem 2rem;
  }
  h2 {
    padding: 1.5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); // 1px 1px 1px 1px = repeat(1px), autofit is to wrap,
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
