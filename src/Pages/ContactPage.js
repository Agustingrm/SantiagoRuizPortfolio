import React, { useEffect } from "react";
import "../Assets/Styles/ContactPage.css";
import { motion } from "framer-motion";
import { fading, shortTransition } from "../Assets/Animations/animationIndex";

function ContactPage() {
    //This lines make the windows go to top of the page on load
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    //End of windows go to top of the page
  return (
    <motion.div id="contactContainer" initial="one" animate="two" exit="three" variants={fading} transition={shortTransition}>
      <p>For job inquiries, questions or just say hi.</p>
      <div>
        <p>email</p>
        <p>hi@santigo-ruiz.com</p>
      </div>
      <div>
        <p>phone</p>
        <p>+54 381 6155819</p>
      </div>
      <p>Tucumán - Argentina</p>
    </motion.div>
  );
}

export default ContactPage;
