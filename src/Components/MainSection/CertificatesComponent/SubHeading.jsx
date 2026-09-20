// ============================================================
// React
// ============================================================
import { useContext } from "react";

// ============================================================
// Translation
// ============================================================
import { useTranslation } from "react-i18next";

// ============================================================
// Context Provider
// ============================================================
import Mohamed from "../../../context/ContextDarkMode";

// ============================================================
// Icons
// ============================================================
import { GraduationCap, Award } from "lucide-react";

// ============================================================
// Component
// ============================================================
export default function SubHeading({ title }) {
  // ============================================================
  // Context
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
    mb-7
    flex
    items-center
    gap-3
  `;

  const iconWrapperStyle = `
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-xl
    bg-red-600/20
    text-red-500
  `;

  const titleStyle = `
    md:text-4xl
    text-3xl
    font-bold
    uppercase
    ${darkMode ? "text-black" : "text-blue-50"}
  `;

  // ============================================================
  // Render
  // ============================================================
  return (
    <div className={containerStyle}>
      <div className={iconWrapperStyle}>
        {title === "education" && <GraduationCap size={30} />}

        {/* ============================================================
            Certifications Icon
            ============================================================ */}

        {title === "certifications" && <Award size={30} />}
      </div>

      <h3 className={titleStyle}>{t(title)}</h3>
    </div>
  );
}
