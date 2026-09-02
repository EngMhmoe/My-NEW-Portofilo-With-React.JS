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
// Components
//============================================================
import TextType from "../../ReactBits/TextType";

//============================================================
// Component
//============================================================
export default function MyDetails({ name, Track, description_One }) {
  // Dark Mode
  const { darkMode } = useContext(DarkMode);

  // Translation
  const { t } = useTranslation();

  // Styles
  const containerStyle = "flex flex-col gap-4";

  const titleStyle = `
    text-2xl
    font-semibold
    capitalize
    duration-1500
    sm:text-4xl
    md:text-[30px]
    lg:text-[35px]
    xl:text-5xl
  `;

  const trackTitleStyle = `
  xl:text-5xl
  lg:text-[35px]
  md:text-[32px]
  sm:text-4xl
    text-2xl
    font-semibold
    duration-1500
  `;

  const descriptionStyle = `
  lg:text-[20px]
  sm:text-[16.5px]
    text-[16.5px]
    duration-1500
    ${darkMode ? "text-black/85" : "text-white/75"}
  `;

  const descriptionMotionStyle = `
    description
    xl:text-[44px]
    lg:text-[36px]
    md:text-[34px]
    sm:text-4xl
    text-3xl
    font-semibold
    capitalize
    duration-1500
  `;

  return (
    // My Details Component
    <div className={containerStyle}>
      {/* Main Details */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 3.5,
          delay: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Name */}
        <h1 className={titleStyle}>{t(`Hi, I'm ${name}`.toLowerCase())}</h1>

        {/* /////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////// */}

        {/* Track */}
        <div className="flex items-end gap-2 mt-1">
          {/* Track Title */}
          <h1 className={trackTitleStyle}>{t("I'm a")}</h1>

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          {/* Animated Track */}
          <motion.h1
            // الحاله الابتدائيه
            initial={{ opacity: 0 }}
            // الحاله النهائيه
            animate={{ opacity: 2 }}
            // خاصيه عادى
            transition={{ duration: 1 }}
            className={descriptionMotionStyle}
          >
            {/* Text Type Component */}
            <TextType
              text={[t(Track.toLowerCase())]}
              loop={false}
              typingSpeed={100}
              pauseDuration={2000}
              DeletingSpeed={100}
              showCursor={true}
              cursorCharacter="_"
              CursorBlinkDuration={0.1}
            />
          </motion.h1>
        </div>
      </motion.div>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////// */}

      {/* Description */}
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 15,
          y: 0,
        }}
        transition={{
          duration: 5,
          delay: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={descriptionStyle}
      >
        {t(description_One.toLowerCase())}.
      </motion.p>
    </div>
  );
}
