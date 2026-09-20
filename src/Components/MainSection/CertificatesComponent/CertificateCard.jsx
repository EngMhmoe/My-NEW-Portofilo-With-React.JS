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
import { Award, Building2, Eye, ArrowUpRight } from "lucide-react";

// ============================================================
// UI Components
// ============================================================
import CertificateModal from "./CertificateModal";

// ============================================================
// Component
// ============================================================
export default function CertificateCard({ certificate, index }) {
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
    flex
    h-full
    flex-col
    overflow-hidden
    rounded-4xl
    border-2
    p-5
    md:p-6
    transition-all
    duration-1000
    ${
      darkMode
        ? "border-red-300/60 bg-[#f8faff]"
        : "border-red-900/50 bg-[#110b0bc8]"
    }
    hover:border-red-600/60
    hover:shadow-[0_20px_50px_rgba(220,20,60,0.15)]
  `;

  const glowStyle = `
    pointer-events-none
    absolute
    -right-20
    -top-20
    h-52
    w-52
    rounded-full
    bg-red-600/15
    blur-3xl
    transition-all
    duration-1000
    group-hover:bg-red-600/25
  `;

  const contentStyle = `
    relative
    z-2
    flex
    h-full
    flex-col
  `;

  const headerStyle = `
    mb-8
    flex
    items-center
    justify-between
  `;

  const certificateIconStyle = `
    flex
    h-15
    w-15
    items-center
    justify-center
    rounded-2xl
    border
    border-red-600/25
    bg-red-600/15
    text-red-500
    shadow-[0_0_55px_rgba(220,20,60,0.12)]
    group-hover:scale-110
    duration-1000
  `;

  const dateStyle = `
    rounded-full
    border
    border-red-600/35
    bg-red-700/10
    px-4
    py-2
    text-sm
    font-bold
    uppercase
    tracking-wider
    text-red-400
  `;

  const titleStyle = `
    mb-3
    sm:text-3xl
    text-2xl
    font-extrabold
    bg-gradient-to-r
    via-red-400
    bg-clip-text
    text-transparent
    ${darkMode ? "from-red-900 to-purple-600" : "from-red-200 to-purple-400"}
  `;

  const organizationStyle = `
    mb-5
    flex
    items-center
    gap-2.5
    text-lg
    font-semibold
    ${darkMode ? "text-black/80" : "text-blue-100"}
  `;

  const iconStyle = `
    shrink-0
    text-red-400
  `;

  const descriptionStyle = `
    mb-8
    flex-1
    leading-7
    ${darkMode ? "text-black/60" : "text-white/50"}
  `;

  const skillsContainerStyle = `
    mb-7
    flex
    flex-wrap
    gap-3
  `;

  const skillStyle = `
    rounded-lg
    border
    border-red-800/40
    px-3
    py-1.5
    text-sm
    font-medium
    text-red-400
    bg-red-600/10
    transition-all
    duration-1000
    hover:border-red-500/60
    hover:bg-red-700/25
  `;

  const certificateButtonStyle = `
    group/button
    cursor-pointer
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-xl
    border
    border-red-700/50
    bg-red-700/10
    px-5
    py-3
    text-sm
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
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.5,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
        }}
        className={cardStyle}
      >
        {/* ============================================================
            Hover Glow
            ============================================================ */}

        <div className={glowStyle} />

        {/* ============================================================
            Card Content
            ============================================================ */}

        <div className={contentStyle}>
          {/* ============================================================
              Certificate Header
              ============================================================ */}

          <div className={headerStyle}>
            <div className={certificateIconStyle}>
              <Award size={40} />
            </div>

            <span className={dateStyle}>{t(certificate.date)}</span>
          </div>

          {/* ============================================================
              Certificate Title
              ============================================================ */}

          <h3 className={titleStyle}>{t(certificate.title)}</h3>

          {/* ============================================================
              Organization
              ============================================================ */}

          <div className={organizationStyle}>
            <Building2 size={20} className={iconStyle} />

            <span>{t(certificate.organization)}</span>
          </div>

          {/* ============================================================
              Description
              ============================================================ */}

          <p className={descriptionStyle}>{t(certificate.description)}</p>

          {/* ============================================================
              Skills
              ============================================================ */}

          <div className={skillsContainerStyle}>
            {certificate.skills.map((skill) => (
              <span key={skill} className={skillStyle}>
                {skill}
              </span>
            ))}
          </div>

          {/* ============================================================
              View Certificate
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
        certificate={certificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
