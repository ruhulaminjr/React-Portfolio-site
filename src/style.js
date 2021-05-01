import styled from 'styled-components';
import {motion} from "framer-motion";

// styled components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
  position: relative;
  @media (max-width: 1300px) {
    display:block;
    text-align:center;
    padding:2rem 2rem;
    button{
      margin:1rem;
    }
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index:2;
  h2 {
    font-weight: lighter;
  }
    @media (max-width: 1300px) {
      padding:0;
    }
`;
export const Img = styled.div`
  flex: 1;
  overflow: hidden;
  z-index:2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
