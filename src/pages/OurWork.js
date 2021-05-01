import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  Fade,
  imgAnim,
  lineAnim,
  Slideranim,
  sliderContainer,
} from "../components/pageAnimation";
import { ScrollA } from "../components/ScrollAnim";

const OurWork = () => {
  const [element,control] = ScrollA();
  const [element2, control2] = ScrollA();
  return (
    <Work
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={Slideranim}> </Frame1>
        <Frame2 variants={Slideranim}> </Frame2>
        <Frame3 variants={Slideranim}> </Frame3>
        <Frame4 variants={Slideranim}> </Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={Fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <ImgContainer>
            <motion.img variants={imgAnim} src={athlete} alt="athlete" />
          </ImgContainer>
        </Link>
      </Movie>
      <Movie ref={element} variants={Fade} initial="hidden" animate={control}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="the racer" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={Fade} initial="hidden" animate={control2}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to="/work/good-times">
          <img src={goodtimes} alt="good times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding:1rem 1rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: red;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const ImgContainer = styled(motion.div)`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
  /* left:10%; */
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
  /* left:15%; */
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
  /* left:30%; */
`;

export default OurWork;
