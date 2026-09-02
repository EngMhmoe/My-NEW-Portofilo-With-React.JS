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
import { technologies } from "../../../Data/Skills Component/skillsAndLibrariesMe";

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
export default function SkillsAndLibraries() {
  //==========================================================
  // Context
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================

  // Main Container
  const containerStyle = `
    w-full
    max-w-6xl
    mx-auto
    mt-15
    text-center
    capitalize
  `;

  // Section Header
  const headerStyle = `
    mb-10
  `;

  // Title
  const titleStyle = `
    mb-3
    text-3xl
    sm:text-4xl
    font-extrabold
    text-foreground
    ${darkMode ? "text-red-800" : "text-blue-200"}
  `;

  // Description
  const descriptionStyle = `
    mx-auto
    max-w-2xl
    text-base
    sm:text-lg
    font-sans
    text-shadow-xs
    text-shadow-red-200/50
    ${darkMode ? "text-black/65" : "text-blue-100/65"}
  `;

  // Categories Grid
  const categoriesGridStyle = `
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:gap-x-2
    lg:gap-x-5
    gap-y-20
    w-full
    max-w-6xl
    mx-auto
  `;

  // Category
  const categoryStyle = `
    w-full
    min-w-0
    text-center
  `;

  // Category Title
  const categoryTitleStyle = `
    mb-5
    text-lg
    sm:text-xl
    font-bold
    text-center
    ${darkMode ? "text-black" : "text-blue-100"}
  `;

  // Technologies Container
  const technologiesStyle = `
    flex
    flex-wrap
    justify-center
    items-center
    gap-x-2.5
    sm:gap-x-3
    gap-y-5
    w-full
  `;

  // Technology
  const technologyStyle = `
    inline-flex
    items-center
    justify-center
    px-4
    py-2
    sm:px-5
    sm:py-2.5
    rounded-full
    text-xs
    sm:text-sm
    font-medium
    text-center
    whitespace-normal
    break-words
    cursor-default
    transition-all
    duration-1000
    shadow
    ${
      darkMode
        ? `
          text-black
          bg-[#F1F5F6]
          border
          border-red-300/30
          hover:border-red-500/50
          hover:bg-red-500/10
          hover:text-red-500
        `
        : `
          border
          border-red-500/40
          bg-red-500/10
          text-red-500
          hover:bg-red-600/20
          hover:border-red-500
          shadow-red-400/45
        `
    }
  `;

  //==========================================================
  // Motion Variants
  //==========================================================

  // Categories Container
  const categoriesContainerVariants = {
    hidden: {
      opacity: 1,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  // Category Animation
  const categoryVariants = {
    hidden: {
      opacity: 0,
      y: 55,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Technologies Container
  const technologiesContainerVariants = {
    hidden: {
      opacity: 1,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.12,
      },
    },
  };

  // Technology Animation
  const technologyVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.94,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  //==========================================================
  // Render
  //==========================================================

  return (
    <div className={containerStyle}>
      {/*======================================================
          Section Header
      ======================================================*/}
      <div className={headerStyle}>
        {/*====================================================
            Title
        ====================================================*/}
        <FadeUpMotion delay={0.15} duration={0.8} y={40}>
          <h3 className={titleStyle}>
            {t("Tech Stack & Tools & Libraries".toLowerCase())}
          </h3>
        </FadeUpMotion>

        {/* ////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////// */}

        {/*====================================================
            Description
        ====================================================*/}
        <FadeUpMotion delay={0.15} duration={1} y={50}>
          <p className={descriptionStyle}>
            {t(
              "Technologies and libraries I use to build modern web site".toLowerCase(),
            )}
          </p>
        </FadeUpMotion>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/*======================================================
          Categories
      ======================================================*/}
      <div className="mb-8 w-full">
        <motion.div
          variants={categoriesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className={categoriesGridStyle}
        >
          {technologies.map((category) => (
            <motion.section
              key={category.id}
              variants={categoryVariants}
              className={categoryStyle}
            >
              {/*================================================
                  Category Title
              =================================================*/}
              <h4 className={categoryTitleStyle}>
                {t(category.title.toLowerCase())}
              </h4>

              {/* ////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////// */}

              {/*================================================
                  Technologies
              =================================================*/}
              <motion.div
                variants={technologiesContainerVariants}
                className={technologiesStyle}
              >
                {category.items.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={technologyVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.05,

                      transition: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={technologyStyle}
                  >
                    {t(tech.toLowerCase())}
                  </motion.span>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
