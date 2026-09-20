// ============================================================
// React
// ============================================================
import { useContext, useState } from "react";

// ============================================================
// Translation
// ============================================================
import { useTranslation } from "react-i18next";

// ============================================================
// Context Provider
// ============================================================
import Mohamed from "../../../context/ContextDarkMode";

// ============================================================
// Libraries
// ============================================================
import { motion } from "framer-motion";

// ============================================================
// Icons
// ============================================================
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Eye,
  ArrowUpRight,
  Award,
} from "lucide-react";

// ============================================================
// UI Components
// ============================================================
import CertificateModal from "./CertificateModal";

// ============================================================
// Component
// ============================================================
export default function EducationCard({ education }) {
  // ============================================================
  // Context
  // ============================================================
  const { darkMode } = useContext(Mohamed);

  // ============================================================
  // Translation
  // ============================================================
  const { t } = useTranslation();

  // ============================================================
  // State
  // ============================================================
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ============================================================
  // Styles
  // ============================================================
  const cardStyle = `
    group
    relative
    z-2
    overflow-hidden
    rounded-4xl
    border-2
    md:p-8
    p-6
    transition-all
    duration-1000
    hover:-translate-y-5
    hover:shadow-[0_30px_60px_rgba(220,20,60,0.15)]
    ${
      darkMode
        ? "border-red-300/60 bg-[#f8faff]"
        : "border-red-900/50 bg-[#110b0bc8]"
    }
  `;

  const glowStyle = `
    pointer-events-none
    absolute
    -right-15
    -top-15
    h-96
    w-96
    rounded-full
    bg-red-600/10
    blur-3xl
    transition-all
    duration-1000
    group-hover:bg-red-600/15
  `;

  const contentStyle = `
    relative
    z-10
  `;

  const headerStyle = `
    mb-8
    flex
    items-start
    justify-between
    gap-5
  `;

  const graduationIconStyle = `
    flex
    h-15
    w-15
    shrink-0
    items-center
    justify-center
    rounded-2xl
    border
    border-red-600/25
    bg-red-600/15
    text-red-500
    shadow-[0_0_55px_rgba(220,20,60,0.12)]
  `;

  const educationBadgeStyle = `
    rounded-full
    border
    border-red-600/35
    bg-red-700/10
    px-5
    py-2
    text-sm
    font-bold
    uppercase
    tracking-wider
    text-red-400
  `;

  const degreeStyle = `
    mb-2
    sm:text-3xl
    text-2xl
    font-bold
    bg-gradient-to-r
    via-red-500
    to-purple-500
    bg-clip-text
    text-transparent
    capitalize
    ${darkMode ? "from-red-900 " : "from-red-200"}
  `;

  const fieldStyle = `
    mb-5
    text-xl
    font-semibold
    capitalize
    ${darkMode ? "text-black/80" : "text-blue-100"}
  `;

  const informationStyle = `
    mb-3
    flex
    items-center
    gap-2
    text-sm
    capitalize
    ${darkMode ? "text-black/60" : "text-white/60"}
  `;

  const informationIconStyle = `
    shrink-0
    text-red-400
  `;

  const durationStyle = `
    mb-6
    flex
    items-center
    gap-2
    text-sm
    capitalize
    ${darkMode ? "text-black/60" : "text-white/60"}
  `;

  const gradeStyle = `
    mb-6
    flex
    items-center
    gap-2
    text-sm
    capitalize
    ${darkMode ? "text-black/60" : "text-white/60"}
  `;

  const descriptionStyle = `
    mb-8
    max-w-3xl
    leading-7
    ${darkMode ? "text-black/60" : "text-white/50"}
  `;

  const certificateButtonStyle = `
    group
    button
    inline-flex
    items-center
    gap-3
    rounded-xl
    border
    border-red-600/50
    bg-red-700/10
    px-5
    py-3
    font-semibold
    text-red-400
    transition-all
    duration-1000
    hover:bg-red-700
    hover:text-white
    hover:shadow-[0_0_25px_rgba(220,20,60,0.3)]
    capitalize
  `;

  const arrowStyle = `
    transition-transform
    duration-500
    group-hover/button:-translate-y-0.5
    group-hover/button:translate-x-0.5
  `;

  // ============================================================
  // Render
  // ============================================================
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cardStyle}
      >
        <div className={glowStyle} />

        <div className={contentStyle}>
          {/* ============================================================
              Header
              ============================================================ */}

          <div className={headerStyle}>
            <div className={graduationIconStyle}>
              <GraduationCap size={40} />
            </div>

            <span className={educationBadgeStyle}>{t("education")}</span>
          </div>

          {/* ============================================================
              Degree
              ============================================================ */}

          <h3 className={degreeStyle}>{t(education.degree)}</h3>

          {/* ============================================================
              Field
              ============================================================ */}

          <h4 className={fieldStyle}>{t(education.field)}</h4>

          {/* ============================================================
              Institution
              ============================================================ */}

          <div className={informationStyle}>
            <MapPin size={20} className={informationIconStyle} />

            <span>{t(education.institution)}</span>
          </div>

          {/* ============================================================
              Duration
              ============================================================ */}

          <div className={durationStyle}>
            <CalendarDays size={20} className={informationIconStyle} />

            <span>{t(education.duration)}</span>
          </div>

          {/* ============================================================
              Grade
              ============================================================ */}

          <div className={gradeStyle}>
            <Award size={20} className={informationIconStyle} />

            <span>{t(education.grade)}</span>
          </div>

          {/* ============================================================
              Description
              ============================================================ */}

          <p className={descriptionStyle}>{t(education.description)}</p>

          {/* ============================================================
              Certificate Button
              ============================================================ */}

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={certificateButtonStyle}
          >
            <Eye size={18} />

            <span>{t("view certificate")}</span>

            <ArrowUpRight size={17} className={arrowStyle} />
          </button>
        </div>
      </motion.div>

      {/* ============================================================
          Certificate Modal
          ============================================================ */}

      <CertificateModal
        certificate={{
          ...education.certificate,
          title: education.degree,
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
