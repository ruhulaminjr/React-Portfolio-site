import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MovieState from "../MovieState";
// animate
import { motion } from "framer-motion";
import { pageAnimation } from "../components/pageAnimation";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [Movies] = useState(MovieState);
  const [Movie,setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = Movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    // console.log(url,currentMovie);
  }, [Movies, url]);
  return (
    <>
      {Movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="extit"
        >
          <Heading>
            <h2>{Movie.title}</h2>
            <div className="line"></div>
            <img src={Movie.mainImg} alt="" />
          </Heading>
          <Awards>
            {Movie.awards.map((award) => (
              <Award
                title={award.title}
                desc={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDiv>
            <img src={Movie.secondaryImg} alt="" />
          </ImageDiv>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #fff;
`;
const Heading = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .line {
    height: 0.3rem;
    background-color: red;
    margin-bottom: 0.2rem;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
    @media (max-width: 1300px) {
      display:block;
      margin:1rem;
    }
`;

const Award = ({ title, desc }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{desc}</p>
    </AwardStyle>
  );
};
const AwardStyle = styled.div`
  padding: 4rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 80%;
    background: #23d997;
    height: 0.3rem;
    margin: 1rem 0rem;
  }
`;
const ImageDiv = styled.div`
  min-height: 50vh;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  img {
    width: 100%;
    margin: auto;
  }
`;
export default MovieDetails;
