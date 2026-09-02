//============================================================
// Icons
//============================================================
import { Code, Briefcase, Users } from "lucide-react";

//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// CountUp
//============================================================
import CountUp from "react-countup";

//============================================================
// Intersection Observer
//============================================================
import { useInView } from "react-intersection-observer";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Context
//============================================================
import DarkMode from "../../context/ContextDarkMode";

//============================================================
// Data
//============================================================
import { stats } from "../../Data/Stats Component/person_Stats";

//============================================================
// Motion
//============================================================
import { motion } from "motion/react";
import FadeUpMotion from "../../UI/FadeUpMotion";

//============================================================
// Component
//============================================================
const Stats = () => {
  //==========================================================
  // Intersection Observer
  //==========================================================

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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

  const sectionStyle = `
    border-y-2
    py-16
    ${darkMode ? "border-black/5 bg-[#f9fafbc1]" : "border-white/5 bg-[#0b0d0fdc]"}
  `;

  const containerStyle = "container m-auto";

  const gridStyle = `
    grid
    grid-cols-1
    gap-y-14
    sm:grid-cols-2
    md:grid-cols-3
  `;

  const statStyle = `
    text-center
    group
    ${darkMode ? "text-black" : "text-blue-100"}
  `;

  const iconContainerStyle = `
    border
    border-white/10
    bg-red-500/20
    shadow-lg
    shadow-red-50/5
    duration-1000
    rounded-xl

    inline-flex
    h-14
    w-14
    items-center
    justify-center
    mb-4
    transition-transform
    group-hover:scale-110
  `;

  const iconStyle = `
    h-7
    w-7
    text-red-700
  `;

  const counterStyle = `
    mb-2
    text-3xl
    font-bold
    gradient-text
    md:text-4xl
  `;

  const countStyle = `
    text-2xl
    font-bold
    text-red-500
    md:text-4xl
  `;

  const labelStyle = `
    text-xl
    text-muted-foreground
    capitalize
    md:text-2xl
    lg:text-2xl
  `;

  //==========================================================
  // Motion Variants
  //==========================================================

  //==========================================================
  // Stats Container Animation
  //==========================================================

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],

        // ظهور العناصر واحد وراء التاني
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  //==========================================================
  // Stat Item Animation
  //==========================================================

  const statVariants = {
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
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  //==========================================================
  // Icon Animation
  //==========================================================

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotate: -8,
    },

    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,

      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  //==========================================================
  // Render
  //==========================================================

  return (
    // Stats Component
    <motion.section
      ref={ref}
      className={sectionStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={containerStyle}>
        <motion.div className={gridStyle}>
          {stats.map((stat, index) => (
            // Stat Item
            <motion.div
              key={index}
              className={statStyle}
              variants={statVariants}
            >
              <FadeUpMotion>
                {/* Icon */}
                <motion.div
                  className={iconContainerStyle}
                  variants={iconVariants}
                >
                  {stat.icon === "Code" ? (
                    <Code className={iconStyle} />
                  ) : stat.icon === "Briefcase" ? (
                    <Briefcase className={iconStyle} />
                  ) : stat.icon === "Users" ? (
                    <Users className={iconStyle} />
                  ) : null}
                </motion.div>
              </FadeUpMotion>

              {/* ///////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////// */}

              {/* Counter */}
              <FadeUpMotion>
                <h3 className={counterStyle}>
                  {inView && (
                    <span className={countStyle}>
                      <CountUp end={stat.value} duration={5} />
                      {stat.text}
                    </span>
                  )}
                </h3>
              </FadeUpMotion>

              {/* ///////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////// */}

              {/* Label */}
              <FadeUpMotion>
                <p className={labelStyle}>{t(stat.label.toLowerCase())}</p>
              </FadeUpMotion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stats;
