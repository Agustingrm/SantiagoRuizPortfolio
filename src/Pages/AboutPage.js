import React, { useEffect } from "react";
import "../Assets/Styles/AboutPage.css";
import aboutPhoto from "../Assets/aboutPhoto.png";
import { motion } from "framer-motion";
import { fading, shortTransition } from "../Assets/Animations/animationIndex";

function AboutPage() {
  //This lines make the windows go to top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //End of windows go to top of the page
  return (
    <motion.div id="aboutContainer" initial="one" animate="two" exit="three" variants={fading} transition={shortTransition}>
      <div id="aboutTextContainer">
        <p id="aboutText1">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nibh dignissim mauris tempus, arcu aenean vel tempor ad vitae feugiat suspendisse ullamcorper
          magnis. Porta non iaculis parturient metus netus molestie nascetur velit nisi aliquam volutpat venenatis egestas id, maecenas fermentum sem gravida
          praesent mattis condimentum diam torquent faucibus pretium blandit. Senectus egestas libero duis feugiat eu vestibulum sagittis etiam in dis mus
          magnis, ornare
        </p>
        <p id="aboutText2">What I do:</p>
        <p id="aboutText3">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nibh dignissim mauris tempus, arcu aenean vel tempor ad vitae feugiat suspendisse ullamcorper
          magnis.
        </p>
        <div id="aboutText4">
          <p>a film director: Gaspar Noé</p>
          <p>a musician: Gustavo Santaolalla</p>
          <p>a painter: Guillermo Lorca García H.</p>
          <p>a person: Elena Romero (my grandmother)</p>
        </div>
        <p id="aboutText5">Tucumán - Argentina</p>
      </div>
      <div id="aboutImageContainer">
        <img src={aboutPhoto} alt="Myself" loading="lazy" />
      </div>
    </motion.div>
  );
}

export default AboutPage;
