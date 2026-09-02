//============================================================
// React
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Motion
//============================================================
import { motion } from "motion/react";

//============================================================
// Component
//============================================================
export default function My_Links_SoshaleMedia() {
  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================
  const linksStyle = `
    wrapper
    sm:w-fit
    w-full
    Links
    flex
    flex-row
    items-center
    sm:justify-start
    justify-evenly
    sm:gap-6
    gap-4
    font-bold
    capitalize
  `;

  const linkStyle = `
    icon
    border
    hover:border-0
  `;

  const linkAttributes = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const svgStyle = {
    height: "1.2em",
    fill: "currentColor",
  };

  const whatsappSvgStyle = {
    width: "24px",
    height: "24px",
    fill: "currentColor",
  };

  //==========================================================
  // Animation
  //==========================================================
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 2.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverAnimation = {
    y: -4,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  };

  const tapAnimation = {
    scale: 0.52,
  };

  return (
    <motion.ul
      className={linksStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Facebook Component */}
      <motion.a
        {...linkAttributes}
        href="https://www.facebook.com/mhmd.lwany.40398"
        className={`${linkStyle} facebook`}
        variants={linkVariants}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <span className="tooltip">{t("Facebook".toLowerCase())}</span>

        <svg
          viewBox="0 0 320 512"
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      </motion.a>

      {/* //////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////// */}

      {/* LinkedIn Component */}
      <motion.a
        {...linkAttributes}
        href="https://www.linkedin.com/in/mohamed-elwani-574742379/?originalSubdomain=eg"
        className={`${linkStyle} linkedin`}
        variants={linkVariants}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <span className="tooltip">{t("LinkedIn".toLowerCase())}</span>

        <svg
          viewBox="0 0 448 512"
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      </motion.a>

      {/* //////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////// */}

      {/* GitHub Component */}
      <motion.a
        {...linkAttributes}
        href="https://github.com/"
        className={`${linkStyle} github`}
        variants={linkVariants}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <span className="tooltip">{t("GitHub".toLowerCase())}</span>

        <svg
          viewBox="0 0 496 512"
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.6-11.1-33.7 2.6-67.9 20.9-6.6 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.2 5.2 61.3 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
        </svg>
      </motion.a>

      {/* //////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////// */}

      {/* WhatsApp Component */}
      <motion.a
        {...linkAttributes}
        href="https://wa.me/201017039942?text=مرحبا أريد التواصل معك"
        className={`${linkStyle} whatsapp`}
        variants={linkVariants}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        <span className="tooltip">{t("WhatsApp".toLowerCase())}</span>

        <svg
          viewBox="0 0 24 24"
          style={whatsappSvgStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372.074-.57.074-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />

          <path d="M12.004 2C6.479 2 2 6.477 2 12c0 1.77.46 3.433 1.265 4.897L2 22l5.22-1.265A9.956 9.956 0 0 0 12.004 22C17.523 22 22 17.523 22 12S17.523 2 12.004 2zm0 18.182a8.16 8.16 0 0 1-4.162-1.14l-.298-.177-3.1.75.757-3.022-.194-.31A8.14 8.14 0 1 1 12.004 20.182z" />
        </svg>
      </motion.a>
    </motion.ul>
  );
}
