import React from "react";
import { motion } from "framer-motion";
import Main from "./Components/main.jsx";

function App() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideIn = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 50, duration: 1 },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <motion.div initial="hidden" animate="visible" variants={slideIn}>
        <Main />
      </motion.div>
    </motion.div>
  );
}

export default App;
