// ============================================================
// Import React Hooks
// ============================================================
import { useContext, useState } from "react";

// ============================================================
// Import Motion
// ============================================================
import { motion } from "motion/react";

// ============================================================
// Import Context
// ============================================================
import DarkMode from "../../../../context/ContextDarkMode";

// ============================================================
// Import Icons
// ============================================================
import { ArrowUpRight } from "lucide-react";

// ============================================================
// Import Hooks
// ============================================================
import useProjects from "../../../../Hook/useProjects";

// ============================================================
// Data
// ============================================================
import { filterButtons } from "../../../../Data/Projects Component/filter_Buttons";

// ============================================================
// Translation
// ============================================================
import { useTranslation } from "react-i18next";

// ============================================================
// Component
// ============================================================
export default function ButtonFilters() {
  // ============================================================
  // Dark Mode
  // ============================================================
  const { darkMode } = useContext(DarkMode);

  // ============================================================
  // Projects
  // ============================================================
  const { AllProjects, FilterProjects } = useProjects();

  // ============================================================
  // Active Filter
  // ============================================================
  const [activeFilter, setActiveFilter] = useState("all");

  // ============================================================
  // Translation
  // ============================================================
  const { t } = useTranslation();

  // ============================================================
  // Button Styles
  // ============================================================
  const buttonStyle = `
    button
    group
    btn
    capitalize

    relative
    z-1
    overflow-hidden

    border
    border-red-500
    hover:border-0

    rounded-2xl
    shadow-2xl

    bg-red-500/10
    text-red-500

    md:text-xl
    md:py-6
    py-5
    md:w-50
  `;

  // ============================================================
  // Dark / Light Mode Shadow
  // ============================================================
  const shadowStyle = darkMode
    ? "shadow-red-500/25 hover:shadow-red-500/60"
    : "shadow-red-950/80 hover:shadow-red-600/50";

  // ============================================================
  // Icon Style
  // ============================================================
  const iconStyle = `
    w-4
    h-4

    text-red-500
    group-hover:text-blue-100

    transition-all
    duration-500

    group-hover:translate-x-2
    group-hover:-translate-y-2
    group-hover:rotate-12
  `;

  // ============================================================
  // Filter Handler
  // ============================================================
  const handleFilter = (value) => {
    setActiveFilter(value);

    if (value === "all") {
      AllProjects();
      return;
    }

    FilterProjects(value);
  };

  // ============================================================
  // Render
  // ============================================================
  return (
    <>
      {filterButtons.map((button, index) => {
        // ============================================================
        // Check Active Filter
        // ============================================================
        const isActive = activeFilter === button.value;

        return (
          <motion.button
            key={button.id}
            onClick={() => handleFilter(button.value)}
            // ========================================================
            // Initial Animation
            // ========================================================
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.85,
            }}
            // ========================================================
            // Animate
            // ========================================================
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            // ========================================================
            // Entrance Transition
            // ========================================================
            transition={{
              duration: 0.9,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            // ========================================================
            // Hover Animation
            // ========================================================
            whileHover={{
              scale: 1.07,
              y: -6,
            }}
            // ========================================================
            // Click Animation
            // ========================================================
            whileTap={{
              scale: 0.92,
              y: 1,
            }}
            className={`
              ${buttonStyle}
              ${shadowStyle}
            `}
          >
            {/* ======================================================
                Active Background
            ====================================================== */}
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="
                  absolute
                  inset-0
                  z-0
                  rounded-2xl

                  bg-red-500
                "
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 28,
                  mass: 1.2,
                }}
              />
            )}

            {/* ======================================================
                Button Content
            ====================================================== */}
            <span
              className={`
                relative
                z-20

                flex
                items-center
                justify-center
                gap-2

                ${isActive ? "text-blue-100" : ""}
              `}
            >
              {/* ====================================================
                  Button Label
              ==================================================== */}
              <motion.span
                animate={{
                  x: isActive ? 2 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {t(button.label.toLowerCase())}
              </motion.span>

              {/* ====================================================
                  Button Icon
                  يتحرك بسبب Hover الزرار نفسه
              ==================================================== */}
              <ArrowUpRight className={iconStyle} />
            </span>
          </motion.button>
        );
      })}
    </>
  );
}
