import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { resizeImage, getPlatformLogo } from "../helper";

import { PS4Loader } from "./LoadingComponent";
import emptyStar from "../img/star-empty.png";
import fullStar from "../img/star-full.png";

const GameDetail = () => {
  const { screen, selectedGameDetail, isGameDetailLoading } = useSelector(
    (state) => state.gameDetail
  );
  const history = useHistory();
  const exitGameDetailHandler = (e) => {
    const elem = e.target;
    if (elem.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
    console.log(elem);
  };
  const getStars = () => {
    const rating = Math.floor(selectedGameDetail.rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={fullStar} alt={`star-${i}`} />);
      } else {
        stars.push(<img key={i} src={emptyStar} alt={`star-${i}`} />);
      }
    }
    return stars;
  };
  return (
    <React.Fragment>
      {!isGameDetailLoading ? (
        <CardShadow className="shadow" onClick={exitGameDetailHandler}>
          <Detail>
            <Stats>
              <Rating>
                <h3>{selectedGameDetail?.name}</h3>
                <p>Rating: {selectedGameDetail?.rating}</p>
                {getStars()}
              </Rating>
              <Info>
                <h3>Platforms</h3>
                <Platform>
                  {selectedGameDetail?.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatformLogo(data.platform.name)}
                      alt="logo"
                      title={data.platform.name}
                    />
                  ))}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <img
                src={resizeImage(selectedGameDetail?.background_image, 1280)}
                alt="image1"
              />
            </Media>
            <Description>
              <p>{selectedGameDetail?.description_raw}</p>
            </Description>
            <Gallery>
              {screen?.results?.map((screen) => (
                <img src={resizeImage(screen.image, 640)} alt="screenshots" key={screen.id} />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      ) : (
        <CardShadow>
          <PS4Loader></PS4Loader>
        </CardShadow>
      )}
    </React.Fragment>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.6rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 5px 20px rgb(0 0 0 / 20%);
  border-radius: 0.5rem;
  margin: -2rem -10rem;
  padding: 1rem;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 1rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const Gallery = styled(motion.div)`
  img {
    margin: 0.5rem 0;
  }
`;
const Rating = styled(motion.div)`
  img {
    width: 1rem;
    height: 1rem;
    display: inline;
  }
`;
export default GameDetail;
