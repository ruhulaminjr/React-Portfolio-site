import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnime } from "../components/pageAnimation";

const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="extit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnime}>Get in touch</motion.h2>
        </Hide>
        <div>
          <Hide>
            <Social variants={titleAnime}>
              <Circle />
              <h2>Send Us A Message</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnime}>
              <Circle />
              <h2>Send an Email</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnime}>
              <Circle />
              <h2>Follow on Social Media</h2>
            </Social>
          </Hide>
        </div>
      </Title>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #35353;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding:1rem 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
overflow:hidden;
`
const Circle = styled.div`
width:3rem;
height:3rem;
background:#353535;
border-radius:50%;
`
const Social = styled(motion.div)`
display:flex;
align-items:center;
h2{
  margin:2rem;
}
`
export default ContactUs;
