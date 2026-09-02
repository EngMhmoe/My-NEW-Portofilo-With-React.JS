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
// Icons
// ============================================================
import { Heart } from "lucide-react";

// ============================================================
// Component
// ============================================================
export default function BottomHeaderFooter() {
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
  capitalize
    py-7
    border-t
    border-red-500/20
    flex
    justify-center
    items-center
  `;

  const contentStyle = `
    container
    px-6
  `;

  const bottomContentStyle = `
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    gap-4
  `;

  const logoStyle = `
    text-lg
    font-bold
    ${darkMode ? "text-red-800" : "text-[#ef5979]"}
  `;

  const logoNameStyle = `
    text-foreground
  `;

  const logoGradientStyle = `
    gradient-text
  `;

  const copyrightStyle = `
    text-muted-foreground
    flex
    items-center
    gap-1
  `;

  const heartStyle = `
    w-4
    h-4
    text-primary
    fill-red-500
  `;

  const yearStyle = `
    text-muted-foreground
    font-mono
  `;

  const yearIconStyle = `
    text-lg
    font-bold
    ${darkMode ? "text-red-800" : "text-[#ef5979]"}
  `;

  // ============================================================
  // Render
  // ============================================================
  return (
    <div className={containerStyle}>
      <div className={contentStyle}>
        {/* ======================================================
            Footer Bottom Content
        ====================================================== */}
        <motion.div
          className={bottomContentStyle}
          // ====================================================
          // Refresh Animation Only
          // ====================================================
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          {/* ==================================================
              Logo
          ================================================== */}
          <a href="#" className={logoStyle}>
            <span className={logoGradientStyle}>&lt;</span>

            <span className={logoNameStyle}>
              {" "}
              {t("Mohamed".toLowerCase())}{" "}
            </span>

            <span className={logoGradientStyle}>/&gt;</span>
          </a>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          {/* ==================================================
              Copyright Message
          ================================================== */}
          <p className={copyrightStyle}>
            {t("Built with")} <Heart className={heartStyle} />{" "}
            {t("using React")} & {t("Tailwind")}
          </p>

          {/* //////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////// */}

          {/* ==================================================
              Copyright Year
          ================================================== */}
          <p dir="ltr" className={yearStyle}>
            <span className={yearIconStyle}>©</span> {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
