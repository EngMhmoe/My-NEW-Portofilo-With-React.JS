//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Context
//============================================================
import DarkMode from "../../../context/ContextDarkMode";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Animations
//============================================================
import { motion } from "motion/react";

//============================================================
// Component
//============================================================
export default function Available({ Available }) {
  // Dark Mode
  const { darkMode } = useContext(DarkMode);

  // Translation
  const { t } = useTranslation();

  // Styles
  const availableStyle = `
    Available
    flex
    w-fit
    items-center
    gap-1.5
    rounded-4xl
    border
    border-white/20
    px-3
    p-1
    font-bold
    text-white
    shadow-lg
    capitalize
    ${
      darkMode
        ? "bg-[#9d0000] shadow-red-500/40"
        : "bg-[#290000] shadow-red-500/25"
    }
  `;

  const statusStyle = "h-2 w-2 rounded-full bg-green-600";

  return (
    // Available For Work Component
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
        delay: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={availableStyle}
    >
      {/* Available Status */}
      <label className={statusStyle}></label>

      {/* //////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////// */}

      {/* Available Text */}
      <h1>{t(Available.toLowerCase())}</h1>
    </motion.div>
  );
}
