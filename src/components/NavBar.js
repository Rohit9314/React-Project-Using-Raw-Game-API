import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

import { searchGame } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const inputHandler = (e) => {
    const searchQuery = e.target.value;
    setSearchText(searchQuery);
  };
  const searchGameHandler = (e) => {
    e.preventDefault();
    dispatch(searchGame(searchText));
  };
  const logoClickHandler = () => {
    setSearchText("");
    dispatch(searchGame(""));
  };
  return (
    <StyledNav>
      <Logo onClick={logoClickHandler}>
        <img src={logo} alt="logo-1" />
        <h1 style={{ 'paddingLeft': '10px' }}><i>Lite-Up</i></h1>
      </Logo>
      <form>
        <input type="text" value={searchText} onChange={inputHandler} />
        <button type="submit" onClick={searchGameHandler}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 1rem 5rem;
  position: sticky;
  top: -1rem;
  background: white;
  box-shadow: 0 0 8px rgb(0 0 0 / 50%);
  border-radius: 0 0 1rem 1rem;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
  text-align: center;
  input {
    @media(min-width: 768px){
      width: 30%;
    }
    
    font-size: 1rem;
    padding: 0.5rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border: none;
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    border: none;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: 2.5rem;
    height: 2.5rem;
    padding: 1px;
  }
`;
export default Nav;
