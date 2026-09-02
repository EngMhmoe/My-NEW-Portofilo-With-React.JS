//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Context Provider
//============================================================
import Mohamed from "../../../context/ContextDarkMode";

//============================================================
// Data
//============================================================
import { mainSkillsBasic } from "../../../Data/Skills Component/mainSkillsBasic";

//============================================================
// Libraries
//============================================================
import CountUp from "react-countup";
import { motion } from "framer-motion";

//============================================================
// Icons
//============================================================
import { Atom, Braces, Code2, Palette, PlugZap, Database } from "lucide-react";

//============================================================
// UI Components
//============================================================
import FadeUpMotion from "../../../UI/FadeUpMotion";

//============================================================
// Component
//============================================================
export default function MainSkills({ InView }) {
  //==========================================================
  // Context
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Motion Variants
  //==========================================================

  // Cards Container
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

  // Card
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
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  //==========================================================
  // Styles
  //==========================================================

  // Section
  const sectionStyle = `
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-3
    gap-x-6
    gap-y-12
    xl:gap-x-7
    w-full
  `;

  // Card
  const cardStyle = `
    group
    relative
    h-full
    w-full
    rounded-4xl
    border-2
    p-5
    md:p-6
    shadow-lg
    transition-all
    duration-1000
    hover:-translate-y-3.5
    hover:shadow-xl
  `;

  // Hover Gradient
  const hoverGradientStyle = `
    pointer-events-none
    absolute
    inset-0
    rounded-2xl
    bg-gradient-to-br
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-5
  `;

  // Card Content
  const cardContentStyle = `
    relative
    z-10
    flex
    h-full
    flex-col
  `;

  // Card Header
  const cardHeaderStyle = `
    mb-6
    flex
    items-center
    justify-between
  `;

  // Skill Icon Container
  const iconContainerStyle = `
    rounded-2xl
    bg-gradient-to-br
    bg-opacity-10
    p-4
  `;

  // Skill Level
  const skillLevelStyle = `
    text-right
  `;

  // Skill Percentage
  const percentageStyle = `
    text-3xl
    font-bold
    gradient-text
    text-red-800
  `;

  // Proficiency
  const proficiencyStyle = `
    text-sm
    capitalize
    text-muted-foreground
    underline
    underline-offset-5
  `;

  // Skill Title
  const titleStyle = `
    mb-3
    text-3xl
    font-bold
    capitalize
    text-foreground
    sm:text-2xl
    md:text-3xl
  `;

  // Skill Description
  const descriptionStyle = `
    mb-6
    flex-1
    capitalize
    text-muted-foreground
  `;

  // Progress Container
  const progressContainerStyle = `
    relative
    h-2.5
    overflow-hidden
    rounded-full
    bg-red-500/35
  `;

  // Progress
  const progressStyle = `
    absolute
    inset-y-0
    left-0
    rounded-full
    bg-gradient-to-r
    transition-all
    duration-1000
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    <motion.section
      variants={cardsContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={sectionStyle}
    >
      {mainSkillsBasic.map((skill) => {
        //==========================================================
        // Icon
        //==========================================================
        const SkillIcon =
          skill.title === "React | JS"
            ? Atom
            : skill.title === "JavaScript"
              ? Braces
              : skill.title === "HTML5 & CSS3"
                ? Code2
                : skill.title === "Tailwind CSS"
                  ? Palette
                  : skill.title === "API Integration"
                    ? PlugZap
                    : skill.title === "Strapi"
                      ? Database
                      : null;

        return (
          <FadeUpMotion
            key={skill.id}
            delay={0.25}
            duration={0.9}
            y={70}
            className="w-full"
          >
            <motion.div
              variants={cardVariants}
              whileTap={{
                scale: 0.98,
              }}
              className={`
              ${cardStyle}
              ${darkMode ? skill.styleCard.light : skill.styleCard.dark}
              hover:shadow-red-500/15
            `}
              style={{
                animationDelay: `${skill.id * 0.1}s`,
              }}
            >
              {/*================================================
                Gradient Background On Hover
            =================================================*/}
              <div
                className={`
                ${hoverGradientStyle}
                ${skill.color}
              `}
              />

              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

              {/*================================================
                Card Content
            =================================================*/}
              <div className={cardContentStyle}>
                {/*================================================
                  Card Header
              =================================================*/}
                <div className={cardHeaderStyle}>
                  {/* Skill Icon */}
                  <div
                    className={`
                    ${iconContainerStyle}
                    ${skill.color}
                  `}
                  >
                    {SkillIcon && <SkillIcon className="h-8 w-8 text-white" />}
                  </div>

                  {/* /////////////////////////////////////////////// */}
                  {/* /////////////////////////////////////////////// */}

                  {/* Skill Level */}
                  <div className={skillLevelStyle}>
                    <span className={percentageStyle}>
                      {InView && (
                        <span>
                          <CountUp end={skill.level} duration={15} />%
                        </span>
                      )}
                    </span>

                    {/* /////////////////////////////////////////////// */}
                    {/* /////////////////////////////////////////////// */}

                    {/* Proficiency */}
                    <p
                      className={`
                      ${proficiencyStyle}
                      ${darkMode ? "text-black/70" : "text-white/75"}
                    `}
                    >
                      {t("proficiency")}
                    </p>
                  </div>
                </div>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/*================================================
                  Skill Title
              =================================================*/}
                <h1
                  className={`
                  ${titleStyle}
                  ${darkMode ? "text-black" : "text-blue-200"}
                `}
                >
                  {t(skill.title.toLowerCase())}
                </h1>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/*================================================
                  Skill Description
              =================================================*/}
                <p
                  className={`
                  ${descriptionStyle}
                  ${darkMode ? "text-black/60" : "text-blue-100/60"}
                `}
                >
                  {t(skill.description.toLowerCase())}.
                </p>

                {/* ////////////////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////////////////// */}

                {/*================================================
                  Progress Bar
              =================================================*/}
                <div className={progressContainerStyle}>
                  <div
                    className={`
                    ${progressStyle}
                    ${skill.color}
                  `}
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </FadeUpMotion>
        );
      })}
    </motion.section>
  );
}
