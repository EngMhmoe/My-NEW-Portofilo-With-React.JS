// ============================================================
// React
// ============================================================
import { useContext } from "react";

// ============================================================
// Translation
// ============================================================
import { useTranslation } from "react-i18next";

// ============================================================
// Context
// ============================================================
import Mohamed from "../context/ContextDarkMode";

// ============================================================
// Motion
// ============================================================
import { motion } from "framer-motion";

// ============================================================
// Components
// ============================================================
import FadeUpMotion from "./FadeUpMotion";

// ============================================================
// Icons
// ============================================================
import {
  UserRound,
  BriefcaseBusiness,
  Sparkles,
  Layers3,
  Mail,
  MessageCircle,
} from "lucide-react";

// ============================================================
// Component
// ============================================================
export default function MineTitle_AND_Description_Section({
  Badge = "",
  Title = {},
  Description = "",
}) {
  // ============================================================
  // Dark Mode
  // ============================================================
  const { darkMode } = useContext(Mohamed);

  // ============================================================
  // Translation
  // ============================================================
  const { t } = useTranslation();

  // ============================================================
  // Styles
  // ============================================================
  const sectionStyle = "";

  const contentStyle = "text-center";

  const badgeStyle = `
    inline-flex
    items-center
    gap-2
    px-5
    py-2
    capitalize
    text-red-500
    font-mono
    text-sm
    rounded-full
    bg-red-500/10
    border
    border-red-500/20
    mb-6
  `;

  const badgeIconStyle = `
    w-5
    h-5
    text-red-500
  `;

  const badgeSmallIconStyle = `
    w-4
    h-4
    text-red-500
  `;

  const titleStyle = `
    mb-4
    text-4xl
    font-extrabold
    capitalize
    text-shadow-lg
    sm:text-5xl
    md:text-6xl
    lg:text-6xl
    ${
      darkMode
        ? "text-red-950/85 text-shadow-gray-300"
        : "text-blue-200 text-shadow-white/5"
    }
  `;

  const highlightStyle = `
    duration-1500
    ${darkMode ? "text-red-800/95" : "text-[#d43c5d]"}
  `;

  const descriptionStyle = `
    mx-auto
    max-w-2xl
    md:text-xl
    sm:text-lg
    text-[18px]
    font-sans
    text-shadow-xs
    text-shadow-red-200/50
    ${darkMode ? "text-black/65" : "text-blue-100/65"}
  `;

  // ============================================================
  // Motion
  // ============================================================
  const contentVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.05,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 35,
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

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const highlightVariants = {
    hidden: {
      opacity: 0,
      x: -15,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // ============================================================
  // Render
  // ============================================================
  return (
    <motion.section
      id="about"
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <div className={sectionStyle}>
        <motion.div className={contentStyle}>
          <FadeUpMotion>
            <div className={badgeStyle}>
              {Badge === "about me" ? (
                <UserRound className={badgeIconStyle} />
              ) : Badge === "services" ? (
                <BriefcaseBusiness className={badgeSmallIconStyle} />
              ) : Badge === "skills" ? (
                <Sparkles className={badgeSmallIconStyle} />
              ) : Badge === "featured work" ? (
                <Layers3 className={badgeSmallIconStyle} />
              ) : Badge === "communication" ? (
                <MessageCircle className={badgeSmallIconStyle} />
              ) : null}

              {/* ////////////////////////////////////////////////////////// */}

              <span>{t(Badge.toLowerCase())}</span>
            </div>
          </FadeUpMotion>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* ============================================================
            Title
             ============================================================ */}
          <FadeUpMotion>
            <motion.header className={titleStyle} variants={titleVariants}>
              <h1>
                {t(Title.title1.toLowerCase())}

                <motion.span
                  className={highlightStyle}
                  variants={highlightVariants}
                >
                  {" "}
                  {t(Title.title2.toLowerCase())}
                </motion.span>
              </h1>
            </motion.header>
          </FadeUpMotion>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* ============================================================
            Description
             ============================================================ */}
          <FadeUpMotion>
            <motion.p
              className={descriptionStyle}
              variants={descriptionVariants}
            >
              {t(Description.toLowerCase())}
            </motion.p>
          </FadeUpMotion>
        </motion.div>
      </div>
    </motion.section>
  );
}
