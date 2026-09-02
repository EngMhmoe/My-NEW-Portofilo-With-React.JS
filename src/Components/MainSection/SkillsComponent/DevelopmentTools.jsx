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
import { mainToolsBasic } from "../../../Data/Skills Component/mainToolsBasic";

//============================================================
// Icons
//============================================================
import { Code2, GitBranch, Package, Palette, Zap } from "lucide-react";

//============================================================
// UI
//============================================================
import FadeUpMotion from "../../../UI/FadeUpMotion";

//============================================================
// Motion
//============================================================
import { motion } from "framer-motion";

//============================================================
// Component
//============================================================
export default function DevelopmentTools() {
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

  // Header
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

  // Tools Grid
  const toolsGridStyle = `
    ToolsGrid
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    gap-5
    sm:gap-6
    gap-y-8
    w-full
    max-w-5xl
    mx-auto
    min-w-0
  `;

  // Tool Card
  const toolCardStyle = `
    group
    flex
    flex-col
    items-center
    justify-center
    w-full
    min-w-0
    p-4
    sm:p-5
    md:p-6
    rounded-3xl
    glass-card
    border-2
    shadow-2xl
    transition-all
    duration-600
    ${
      darkMode
        ? `
          text-black
          border-red-300/60
          bg-[#f8faff]
          shadow-red-400/10
          hover:border-red-500/45
          hover:shadow-red-600/20
        `
        : `
          bg-[#0f0a0ac8]
          hover:bg-[#1a1111c8]
          border-red-900/45
          shadow-red-700/25
          hover:shadow-red-700/25
          hover:border-red-500/30
          text-blue-100
        `
    }
  `;

  // Tool Icon Container
  const iconContainerStyle = `
    mb-5
    p-3
    rounded-xl
    bg-red-500/15
    group-hover:bg-red-500/30
    transition-all
    duration-1000
  `;

  // Tool Icon
  const iconStyle = `
    w-7
    h-7
    text-red-500
  `;

  // Tool Name
  const toolNameStyle = `
    text-foreground
    font-bold
    text-center
    mb-1
    break-words
    text-lg
  `;

  // Tool Category
  const categoryStyle = `
    text-xs
    text-muted-foreground
    text-center
  `;

  //==========================================================
  // Motion Variants
  //==========================================================

  // Tools Container
  const toolsContainerVariants = {
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

  // Tool Card
  const toolCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.5,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  //==========================================================
  // Tool Icon
  //==========================================================
  const getToolIcon = (name) =>
    name === "VS Code"
      ? Code2
      : name === "Git & GitHub"
        ? GitBranch
        : name === "Vite"
          ? Zap
          : name === "Figma"
            ? Palette
            : name === "npm"
              ? Package
              : null;

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
          <h3 className={titleStyle}>{t("development tools".toLowerCase())}</h3>
        </FadeUpMotion>

        {/* ////////////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////////////// */}

        {/*====================================================
            Description
        ====================================================*/}
        <FadeUpMotion delay={0.15} duration={1} y={50}>
          <p className={descriptionStyle}>
            {t(
              "tools and technologies i use to build, manage, and deliver modern web site".toLowerCase(),
            )}
          </p>
        </FadeUpMotion>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/*======================================================
          Tools Grid
      ======================================================*/}
      <motion.div
        variants={toolsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className={toolsGridStyle}
      >
        {mainToolsBasic.map((tool) => {
          //==================================================
          // Tool Icon
          //==================================================
          const ToolIcon = getToolIcon(tool.name);

          return (
            <FadeUpMotion
              key={tool.id}
              delay={0.2}
              duration={0.8}
              y={50}
              className="w-full"
            >
              {/*================================================
                  Tool Card
              =================================================*/}
              <motion.div
                variants={toolCardVariants}
                whileHover={{
                  y: -9,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={toolCardStyle}
              >
                {/*================================================
                    Tool Icon
                =================================================*/}
                <div className={iconContainerStyle}>
                  {ToolIcon && <ToolIcon className={iconStyle} />}
                </div>

                {/* ////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////// */}

                {/*================================================
                    Tool Name
                =================================================*/}
                <span className={toolNameStyle}>
                  {t(tool.name.toLowerCase())}
                </span>

                {/* ////////////////////////////////////////////////////////////////// */}
                {/* ////////////////////////////////////////////////////////////////// */}

                {/*================================================
                    Tool Category
                =================================================*/}
                <span className={categoryStyle}>
                  {t(tool.category.toLowerCase())}
                </span>
              </motion.div>
            </FadeUpMotion>
          );
        })}
      </motion.div>
    </div>
  );
}
