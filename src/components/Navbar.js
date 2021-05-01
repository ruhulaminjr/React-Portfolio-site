import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 1rem 10rem;
  align-items: center;
  background: #282828;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;
    ul {
      li {
        padding-left: 1rem;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: red;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 40%;
  }
`;

export default Navbar;
