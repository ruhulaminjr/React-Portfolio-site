import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { ScrollA } from "./ScrollAnim";
import { Fade } from "./pageAnimation";

const Faqsection = () => {
  const [element, controls] = ScrollA();
  return (
    <Faq variants={Fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any questions? <span>Faq</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"How do i start ?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              eligendi?
            </p>
          </div>
        </Toggle>
        <Toggle title={"What Products do you offer ?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              eligendi?
            </p>
          </div>
        </Toggle>
        <Toggle title={"Diferrent Payment Methods"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              eligendi?
            </p>
          </div>
        </Toggle>
        <Toggle title={"Daily Schedule ?"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              eligendi?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
`;
export default Faqsection;
