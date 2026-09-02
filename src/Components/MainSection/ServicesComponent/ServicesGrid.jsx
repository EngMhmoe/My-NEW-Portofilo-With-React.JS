//
//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Context
//============================================================
import Mohamed from "../../../context/ContextDarkMode";

//============================================================
// Data
//============================================================
import { services } from "../../../Data/services Component/cardServicesMe";

//============================================================
// Components UI
//============================================================
import FadeUpMotion from "../../../UI/FadeUpMotion";
import GlowEffectOnHover from "./GlowEffectOnHover";
import CornerDecoration from "./CornerDecoration";
import IconsCard from "./IconsCard";
import TitleCard from "./TitleCard";
import DescriptionCard from "./DescriptionCard";
import FeaturesCard from "./FeaturesCard";

//============================================================
// Motion
//============================================================
import { motion } from "framer-motion";

//============================================================
// Component
//============================================================
export default function ServicesGrid() {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Motion Variants
  //==========================================================

  // Services Cards Container
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

  // Services Card
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
  // Styles
  //==========================================================

  // Cards Grid Style
  const gridStyle = `
    grid
    xl:grid-cols-3
    sm:grid-cols-2
    grid-cols-1
    gap-y-12
    xl:gap-x-7
    gap-x-6
  `;

  // Card Style
  const cardStyle = `
    group
    relative
    rounded-4xl
    border-2
    md:p-6
    p-5
    shadow-lg
    transition-all
    duration-1000
    hover:shadow-xl
    hover:shadow-red-500/15
    hover:-translate-y-3.5
  `;

  // Dark Mode Card Style
  const darkCardStyle = darkMode
    ? `
      bg-[#f8faff]
      border-red-300/60
      hover:border-red-500/50
    `
    : `
      bg-[#0f0a0ac8]
      border-red-900/50
      shadow-red-700/20
      hover:border-red-500/30
    `;

  //==========================================================
  // Render
  //==========================================================

  return (
    // Services Grid Component
    <motion.section
      variants={cardsContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={gridStyle}
    >
      {services.map((service) => (
        <FadeUpMotion key={service.id} delay={0.25} duration={0.9} y={70}>
          {/* Service Card */}
          <motion.div
            variants={cardVariants}
            whileTap={{
              scale: 0.98,
            }}
            className={`${cardStyle} ${darkCardStyle}`}
          >
            {/* Glow Effect On Hover */}
            <GlowEffectOnHover />

            {/* ////////////////////////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////////////////////////// */}

            <div className="relative z-0">
              {/* Icon */}
              <IconsCard Service={service} />

              {/* /////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////// */}

              {/* Title */}
              <TitleCard Service={service} />

              {/* /////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////// */}

              {/* Description */}
              <DescriptionCard Service={service} />

              {/* /////////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////////// */}

              {/* Features */}
              <FeaturesCard Service={service} />
            </div>

            {/* ////////////////////////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////////////////////////// */}

            {/* Corner Decoration */}
            <CornerDecoration />
          </motion.div>
        </FadeUpMotion>
      ))}
    </motion.section>
  );
}
