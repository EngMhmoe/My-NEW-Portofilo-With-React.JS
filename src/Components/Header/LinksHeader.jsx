//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Hooks
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Context
//============================================================
import DarkMode from "../../context/ContextDarkMode";

//============================================================
// Data
//============================================================
import { headerLinks } from "../../Data/Header Component/header_Links";

//============================================================
// Material UI
//============================================================
import { Button } from "@mui/material";

//============================================================
// Motion
//============================================================
import { motion } from "motion/react";

//============================================================
// Component
//============================================================
export default function LinksHeader() {
  // Dark Mode
  const { darkMode } = useContext(DarkMode);

  // Translation
  const { t } = useTranslation();

  // Styles
  const linksHeaderStyle = `
    Links1
    flex
    items-center
    justify-around
    gap-5
    rounded-[10px]
    px-3
    py-2
    shadow-2xl
    ${darkMode ? "bg-[#fff9f9] shadow-red-600/40" : "bg-[#000000] shadow-red-700/25"}
  `;

  // Button Variant
  const buttonVariant = darkMode ? "contained" : "outlined";

  //============================================================
  // Motion Variants
  //============================================================
  // Container Animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.9,
    },

    visible: {
      opacity: 10,
      y: 0,
      scale: 1,

      transition: {
        duration: 1,
        ease: "easeOut",

        // Stagger Children
        staggerChildren: 0.2,
        delayChildren: 0.15,
      },
    },
  };

  // Link Animation
  const linkVariants = {
    hidden: {
      opacity: 0,
      y: -15,
    },

    visible: {
      opacity: 10,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    // Links Header Component
    <motion.div
      className={linksHeaderStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Links */}
      {headerLinks.map((itemLink, index) => (
        <motion.a
          href={itemLink.href}
          key={index}
          variants={linkVariants}
          whileHover={{
            y: -5,
            scale: 1.05,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          {/* Header Link Button */}
          <Button variant={buttonVariant} color="error" id="button">
            {t(itemLink.label.toLowerCase())}
          </Button>
        </motion.a>
      ))}
    </motion.div>
  );
}
