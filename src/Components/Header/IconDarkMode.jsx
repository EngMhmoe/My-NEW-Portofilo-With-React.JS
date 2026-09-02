//============================================================
// React
//============================================================
import { useContext, useEffect } from "react";

//============================================================
// Context
//============================================================
import DarkMode from "../../context/ContextDarkMode";

//============================================================
// Material UI
//============================================================
import { Button } from "@mui/material";

//============================================================
// Material UI Icons
//============================================================
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

//============================================================
// Motion
//============================================================
import { AnimatePresence, motion } from "motion/react";

//============================================================
// Component
//============================================================
export default function IconDarkMode() {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode, setDarkMode } = useContext(DarkMode);

  //==========================================================
  // Click Handler
  //==========================================================
  function ClickHandDarkMode() {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);

      return !prev;
    });
  }

  //==========================================================
  // Get Dark Mode From Local Storage
  //==========================================================
  useEffect(() => {
    const storage = localStorage.getItem("darkMode");

    setDarkMode(storage === "true");
  }, []);

  //==========================================================
  // Styles
  //==========================================================
  const iconContainerStyle = "Dark-Mode dark";

  const buttonStyle = {
    borderRadius: "50%",
  };

  const darkModeIconStyle = {
    fontSize: "45px",
  };

  const lightModeIconStyle = {
    fontSize: "40px",
    color: "#ffc800",
  };

  //==========================================================
  // Motion
  //==========================================================

  // Icon Animation
  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },

    animate: {
      opacity: 10,
      scale: 1,
      rotate: 0,

      transition: {
        type: "spring",
        stiffness: 200,
        damping: 18,
      },
    },

    exit: {
      opacity: 0,
      scale: 0,
      rotate: 180,

      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    //========================================================
    // Dark Mode Component
    //========================================================
    <motion.div
      className={iconContainerStyle}
      onClick={ClickHandDarkMode}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 1.4,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      {/*======================================================
          Dark / Light Mode Button
      ======================================================*/}
      <Button variant="text" style={buttonStyle}>
        {/*====================================================
            AnimatePresence
        ====================================================*/}
        <AnimatePresence mode="wait">
          {darkMode ? (
            //==================================================
            // Dark Mode Icon
            //==================================================
            <motion.div
              key="dark"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <DarkModeIcon style={darkModeIconStyle} color="error" />
            </motion.div>
          ) : (
            //==================================================
            // Light Mode Icon
            //==================================================
            <motion.div
              key="light"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <LightModeIcon style={lightModeIconStyle} />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}
