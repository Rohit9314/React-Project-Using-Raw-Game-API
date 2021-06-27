import styled from "styled-components";
import { motion } from "framer-motion";
import flower from "../img/flower.svg";

export const PS4Loader = ({ iconColor = '#FFF' }) => {
  return (
    <Wrapper>
      <h3 style={{ color: iconColor }}>Loading...</h3>
      <div id="triangle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 115">
          <defs />
          <path fill={iconColor} d="M64.5 0L129 115H0L64.5 0zm0 24.531L20.489 103h88.021L64.5 24.531z" /></svg>
      </div>

      <div id="circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
          <defs />
          <path fill={iconColor} d="M64.5 0C100.122 0 129 28.878 129 64.5S100.122 129 64.5 129 0 100.122 0 64.5 28.878 0 64.5 0zm0 12C35.505 12 12 35.505 12 64.5S35.505 117 64.5 117 117 93.495 117 64.5 93.495 12 64.5 12z" /></svg>
      </div>

      <div id="cross">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110">
          <defs />
          <path fill={iconColor} d="M101 .515L109.485 9l-46 46 46 46-8.485 8.485-46-46-46 46L.515 101l46-46-46-46L9 .515l46 46 46-46z" /></svg>
      </div>

      <div id="square">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 113">
          <defs />
          <path fill={iconColor} d="M113 0v113H0V0h113zm-12 12H12v89h89V12z" /></svg>
      </div>
    </Wrapper>
  );
}
export const FlowerSpinner = () => {
  return (
    <Spinner>
      <img src={flower} className="spinner" alt="flower" />
    </Spinner>
  )

}
const Spinner = styled(motion.div)`
  animation: spin 2s linear infinite;
  width: max-content;
  position: absolute;
  left: 50%;
  top: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Wrapper = styled(motion.div)`

    position: absolute;
    width: calc(48px * 2);
    margin: 50vh 50%;
    transform: translate(-50%, -50%);
    div {
        width: 48px;
        height: 48px;
        float: left;
        text-align: center;
        line-height: 4.5;
      }
      svg {
        width: 70%;
        animation: rotateAnimation 2s ease-in-out infinite;
      }
      
      @keyframes rotateAnimation {
        0% {
          transform: rotate(0) scale(1);
        }
        50% {
          transform: rotate(120deg) scale(0);
        }
        70% {
          transform: rotate(-120deg) scale(0);
        }
        100% {
          transform: rotate(0) scale(1);
        }
      }
`;