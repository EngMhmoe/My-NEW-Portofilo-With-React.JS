//============================================================
// React
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Material UI
//============================================================
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

//============================================================
// Motion
//============================================================
import { motion } from "motion/react";

//============================================================
// Component
//============================================================
export default function DownloadCV() {
  // Translation
  const { t } = useTranslation();

  // Styles
  const buttonStyle = `
    group
    relative
    h-11
    overflow-hidden
    shadow-[0_0_35px_rgba(211,47,47,0.4)]
    transition-all
    duration-300
    ease-out
    hover:shadow-[0_0_50px_rgba(211,47,47,0.6)]
    active:scale-95
  `;

  const textStyle = `
    relative
    z-1
    whitespace-nowrap
    pr-10
    text-lg
    font-bold
    transition-all
    duration-500
    ease-out
    group-hover:-translate-x-3
    group-hover:opacity-0
  `;

  const downloadAreaStyle = `
    absolute
    right-0
    top-0
    z-2
    flex
    h-full
    w-11
    items-center
    justify-center
    bg-red-700
    transition-all
    duration-500
    ease-[cubic-bezier(0.4,0,0.2,1)]
    group-hover:w-full
  `;

  const iconStyle = `
    text-white
    transition-all
    duration-500
    ease-out
    group-hover:translate-y-1
    group-hover:scale-125
  `;

  const underlineStyle = `
    absolute
    bottom-[8px]
    h-[2px]
    w-0
    rounded-full
    bg-white
    transition-all
    duration-500
    group-hover:w-5
  `;

  //============================================================
  // Motion Variants
  //============================================================

  // Container Animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 55,
      scale: 0.97,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  //============================================================
  // Render
  //============================================================

  return (
    <motion.a
      href="https://drive.google.com/uc?export=download&id=1I3eyc23Of0Awnumxv0KVWQSyttXv2ym6"
      download
      rel="noopener noreferrer"
      className="sm:m-0 m-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -5,
        scale: 1.05,

        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Button variant="contained" color="error" className={buttonStyle}>
        {/* Text */}
        <span className={textStyle}>{t("Download CV".toLowerCase())}</span>

        {/* ///////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////// */}

        {/* Animated Download Area */}
        <span className={downloadAreaStyle}>
          {/* Download Icon */}
          <DownloadIcon className={iconStyle} />

          {/* ///////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////// */}

          {/* Underline */}
          <span className={underlineStyle} />
        </span>
      </Button>
    </motion.a>
  );
}
