//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Context
//============================================================
import DarkMode from "../../../context/ContextDarkMode";

//============================================================
// Icons
//============================================================
import { User, GraduationCap, Briefcase, Heart } from "lucide-react";

//============================================================
// Data
//============================================================
import { aboutItems } from "../../../Data/About Component/cardAboutMe";

//============================================================
// Motion
//============================================================
import { motion } from "framer-motion";

//============================================================
// UI
//============================================================
import FadeUpMotion from "../../../UI/FadeUpMotion";

//============================================================
// Component
//============================================================
export default function ContainerAboutMe() {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(DarkMode);

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================
  const containerStyle = `
    mx-auto
    grid
    max-w-5xl
    grid-cols-1
    gap-10
    md:grid-cols-2
  `;

  const cardStyle = `
    group
    rounded-4xl
    border-2
    p-5
    shadow-lg
    transition-transform
    duration-1500
    hover:scale-105
    ${
      darkMode
        ? "border-red-300/60 bg-[#f8faff] shadow-red-400/25 hover:border-red-500/45 hover:shadow-red-600/25"
        : "border-red-900/50 bg-[#0f0a0ac8] shadow-red-700/15 hover:border-red-500/30 hover:shadow-red-700/25"
    }
  `;

  const cardContentStyle = `
    aboutItem
    flex
    flex-co
    items-start
    gap-4
    sm:flex-row
  `;

  const iconContainerStyle = `
    rounded-full
    border
    border-red-500/10
    bg-red-500/20
    shadow-lg
    shadow-red-50/5
    duration-1000
    group-hover:bg-red-800
    p-3
  `;

  const iconStyle = `
    h-6
    w-6
    text-red-500
    duration-1000
    group-hover:text-white
  `;

  const contentStyle = "flex-1 text-start";

  const titleStyle = `
    mb-2
    text-3xl
    font-semibold
    capitalize
    duration-500
    md:text-2xl
    lg:text-2xl
    ${
      darkMode
        ? "text-black group-hover:text-red-800/95"
        : "text-blue-200 group-hover:text-[#d43c5d]"
    }
  `;

  const descriptionStyle = `
    text-muted-foreground
    capitalize
    md:text-sm
    xl:text-md
    ${darkMode ? "text-black/60" : "text-blue-100/60"}
  `;

  const personalInfoContainerStyle = `
    mx-auto
    mt-25
    max-w-2xl
    text-center
    xl:max-w-3xl
  `;

  const personalInfoCardStyle = "glass-card";

  const personalInfoStyle = `
    glass-card
    rounded-4xl
    border-2
    p-5
    text-muted-foreground
    shadow-lg
    duration-1000
    lg:text-lg
    leading-relaxed
    ${
      darkMode
        ? "border-orange-500 bg-[#f8faff] text-black shadow-orange-500/35"
        : "border-y-orange-700 bg-[#251111a0] text-blue-100 shadow-orange-500/35"
    }
  `;

  const nameStyle = `
    font-bold
    capitalize
    ${darkMode ? "text-red-800/95" : "text-[#d43c5d]"}
  `;

  //==========================================================
  // Get Icon
  //==========================================================
  const getIcon = (icon) => {
    const icons = {
      User,
      GraduationCap,
      Briefcase,
      Heart,
    };

    const Icon = icons[icon];

    return Icon ? <Icon className={iconStyle} /> : null;
  };

  //==========================================================
  // Motion Variants
  //==========================================================

  // About Cards Container
  const cardsContainerVariants = {
    hidden: {
      opacity: 1,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // About Card
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 70,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

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
    // Container About Me Component
    <div>
      {/*======================================================
          About Items
      ======================================================*/}
      <motion.div
        className={containerStyle}
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {aboutItems.map((item, index) => (
          <FadeUpMotion key={index} delay={0.25} duration={0.9} y={70}>
            {/* //==================================================== // About Item
            Component //==================================================== */}
            <motion.div
              className={cardStyle}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <div className={cardContentStyle}>
                {/* Item Icon */}
                <div className={iconContainerStyle}>{getIcon(item.icon)}</div>

                {/* //////////////////////////////////////////////////////////// */}
                {/* //////////////////////////////////////////////////////////// */}

                {/* Item Content */}
                <div className={contentStyle}>
                  {/* Item Title */}
                  <h3 className={titleStyle}>{t(item.title.toLowerCase())}</h3>

                  {/* //////////////////////////////////////////////////////////// */}
                  {/* //////////////////////////////////////////////////////////// */}

                  {/* Item Description */}
                  <p className={descriptionStyle}>
                    {t(item.description.toLowerCase())}.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeUpMotion>
        ))}
      </motion.div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/*======================================================
          Personal Information
      ======================================================*/}
      <FadeUpMotion delay={0.25} duration={0.9} y={70}>
        <div className={personalInfoContainerStyle}>
          <div className={personalInfoCardStyle}>
            {/* Personal Information Description */}
            <p className={personalInfoStyle}>
              {t("I'm")} {/* Name */}
              <span className={nameStyle}>
                {t("Mohammed Alwani".toLowerCase())}
              </span>
              ,{" "}
              {t(
                "a Front-End Developer specializing in React.js. I build modern, responsive, and high-performance web applications with a focus on clean code, user-friendly interfaces, and seamless user experiences. I use modern web technologies to turn ideas into practical and engaging digital solutions",
              ).trim()}
              .
            </p>
          </div>
        </div>
      </FadeUpMotion>
    </div>
  );
}
