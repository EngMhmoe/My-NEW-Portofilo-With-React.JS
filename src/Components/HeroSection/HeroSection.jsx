//============================================================
// Style
//============================================================
import "../../styles/heroSection.css";

//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Components
//============================================================
import HeroSectionLeft from "./Main Section Left/HeroSectionLeft";
import HeroSectionRight from "./Main Section Right/HeroSectionRight";

//============================================================
// Context
//============================================================
import DarkMode from "../../context/ContextDarkMode";

//============================================================
// Motion
//============================================================
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//============================================================
// Component
//============================================================
export default function HeroSection() {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(DarkMode);

  const { t, i18n } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================
  const containerStyle = "flex flex-col gap-50";

  const heroSectionStyle = `
    flex flex-col items-center justify-between
    gap-y-15
    md:mx-0  mx-5
    md:flex-row md:mt-15
    ${darkMode ? "text-black" : "text-white"}
  `;

  const heroSectionLeftStyle = `
    mt-20
    w-full
    self-start
    sm:w-full
    md:ml-15 md:w-[80%]
    lg:w-[60%]
    xl:w-[55%]
  `;

  //==========================================================
  // Motion Variants
  //==========================================================

  // Hero Container
  const heroVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -56.6,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 35,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  //==========================================================
  // Render
  //==========================================================
  return (
    <motion.div
      className={containerStyle}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`${heroSectionStyle} ${i18n.language === "ar" && "md:pr-15"}`}
        variants={heroVariants}
      >
        {/*====================================================
            Hero Section Left
        ====================================================*/}
        <motion.div className={heroSectionLeftStyle} variants={leftVariants}>
          <HeroSectionLeft />
        </motion.div>

        {/* /////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////// */}

        {/*====================================================
            Hero Section Right
        ====================================================*/}
        <motion.div variants={rightVariants}>
          <HeroSectionRight />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
