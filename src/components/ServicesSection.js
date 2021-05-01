import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { About, Description,} from "../style";
import home2 from "../img/home2.png";
import { ScrollA } from "./ScrollAnim";
import { Fade } from "./pageAnimation";

const ServicesSection = () => {
  const [element, controls] = ScrollA();

  return (
    <Services variants={Fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          High <span>quality</span>service.
        </h2>

        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
            </p>
          </Card>
        </Cards>
      </Description>
      <div>
        <img src={home2} alt="home 2" />
      </div>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  div{
    img{
      max-width:100%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    text-align:center;
    justify-content:center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #fff;
      color: #000;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
