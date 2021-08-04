import React from "react";
import "../Assets/Styles/ContactPage.css";
import { motion } from "framer-motion";
import { fading, shortTransition } from "../Assets/Animations/animationIndex";

function ContactPage() {
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
