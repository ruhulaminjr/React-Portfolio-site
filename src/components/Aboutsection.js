import React from "react";
import home1 from "../img/home1.png";
// styled componed
import { About, Description, Img, Hide } from "../style";
import { motion } from "framer-motion";
import { pageAnimation, titleAnime, Fade, imgAnim } from "./pageAnimation";
import Wave from "./Wave";
import ScrollTop from "./ScrollTop";
const Aboutsection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About>
        <Description>
          <div className="title">
            <Hide>
              <motion.h2 variants={titleAnime}>We work to make</motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnime}>
                your <span>dreams</span>
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnime}>come true.</motion.h2>
            </Hide>
          </div>
          <motion.p variants={Fade}>
            Contact us for any photography or videography ideas that you have We
            have professionals with amazing skills to help you achieve it{" "}
          </motion.p>
          <motion.button variants={Fade}>Contact Us</motion.button>
        </Description>
        <Img>
          <motion.img variants={imgAnim} src={home1} alt="" />
        </Img>
        <Wave />
      </About>
      <ScrollTop/>
    </motion.div>
  );
};

export default Aboutsection;
