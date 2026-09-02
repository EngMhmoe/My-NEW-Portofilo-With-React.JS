// ============================================================
// React Hooks
// ============================================================
import { useContext } from "react";

// ============================================================
// Motion
// ============================================================
import { motion } from "motion/react";

// ============================================================
// Context Provider
// ============================================================
import Mohamed from "../../context/ContextDarkMode";

// ============================================================
// Translation
// ============================================================
import { useTranslation } from "react-i18next";

// ============================================================
// Material UI
// ============================================================
import GroupIcon from "@mui/icons-material/Group";

// ============================================================
// Component
// ============================================================
export default function AboutMe() {
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
  const containerStyle = `
    flex
    flex-col
    justify-center
    items-center
    md:flex-col
    md:justify-start
    md:items-start
  `;

  const titleStyle = `
    mb-4
    flex
    gap-3
    items-center
    justify-center
    font-bold
    uppercase
    md:justify-start
  `;

  const titleTextStyle = `
    text-2xl
    ${darkMode ? "text-red-800" : "text-[#f55578]"}
  `;

  const descriptionStyle = `
    leading-[1.6]
    max-w-[400px]
  `;

  const highlightStyle = `
    ${darkMode ? "text-red-500" : "text-[#fd8ea6]"}
  `;

  // ============================================================
  // Render
  // ============================================================
  return (
    <motion.div
      className={containerStyle}
      // ========================================================
      // Refresh Animation Only
      // ========================================================
      initial={{
        opacity: 0,
        x: -45,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.3,
        ease: "easeOut",
      }}
    >
      {/* ======================================================
          Section Title
      ====================================================== */}
      <h2 className={titleStyle}>
        <span className="[&>svg]:h-4 [&>svg]:w-4">
          <GroupIcon />
        </span>

        {/* //////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////// */}

        <span className={titleTextStyle}>{t("about me")}</span>
      </h2>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      {/* ======================================================
          Section Description
      ====================================================== */}
      <p className={descriptionStyle}>
        {t("I build modern web")}{" "}
        <span className={highlightStyle}>{t("experiences")}</span>{" "}
        {t("that are fast")},{" "}
        <span className={highlightStyle}>{t("responsive")}</span>,{" "}
        {t(
          "and user-friendly, with a strong focus on clean design and quality code",
        )}
        .
      </p>
    </motion.div>
  );
}
