// ============================================================
// React
// ============================================================
import { useContext, useEffect } from "react";

// ============================================================
// Translation
// ============================================================
import { useTranslation } from "react-i18next";

// ============================================================
// Icons
// ============================================================
import { X } from "lucide-react";

// ============================================================
// Context
// ============================================================
import Mohamed from "../../context/ContextDarkMode";

// ============================================================
// Data
// ============================================================
import { menuBar_Links } from "../../Data/Header Component/menuBar_Links";

// ============================================================
// Components
// ============================================================
import IconDarkMode from "./IconDarkMode";
import SelectedLang from "./SelectedLang";

// ============================================================
// Component
// ============================================================
export default function MobileMenuModal({ isOpen, onClose }) {
  // ============================================================
  // Translation
  // ============================================================
  const { t } = useTranslation();

  // ============================================================
  // Context
  // ============================================================
  const { darkMode } = useContext(Mohamed);

  // ============================================================
  // Effects
  // ============================================================
  // Close With ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // ============================================================
  // Don't Render
  // ============================================================
  if (!isOpen) return null;

  // ============================================================
  // Functions
  // ============================================================
  const handleLinkClick = (event, item) => {
    const label = item.label?.toLowerCase();

    onClose();

    if (label === "home" || item.href === "#") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // ============================================================
  // Styles
  // ============================================================
  const modalStyle = `
    fixed
    inset-0
    z-[9999]
    overflow-hidden
    ${darkMode ? "bg-white" : "bg-black"}
  `;

  const headerStyle = `
    h-[75px]
    w-full
    flex
    items-center
    justify-between
    px-5
    border-b
    ${darkMode ? "border-black/20" : "border-white/20"}
  `;

  const closeButtonStyle = `
    w-10
    h-10
    rounded-full
    flex
    items-center
    justify-center
    shadow-lg
    cursor-pointer
    transition-all
    duration-300
    hover:scale-105
    active:scale-95
    ${darkMode ? "bg-black text-white" : "bg-white text-black"}
  `;

  const controlsStyle = `
    flex
    items-center
    xl:gap-10
    gap-5
  `;

  const navStyle = `
    h-[calc(100dvh-70px)]
    w-full
    flex
    items-center
    justify-center
    overflow-hidden
    px-6
  `;

  const listStyle = `
    w-full
    max-w-[900px]
    flex
    flex-col
    items-center
    justify-center
    gap-3
  `;

  const listItemStyle = `
    w-full
  `;

  const linkStyle = `
    group
    relative
    flex
    items-center
    justify-center
    w-full
    py-5
    text-3xl
    sm:text-4xl
    font-extrabold
    tracking-wide
    transition-all
    duration-1000
    capitalize
    hover:text-[#ff6200]
    ${darkMode ? "text-black" : "text-white"}
  `;

  const numberStyle = `
    absolute
    left-0
    text-sm
    group-hover:text-[#ff6200]
    transition-colors
    duration-500
    ${darkMode ? "text-red-500/50" : "text-red-500/35"}
  `;

  const arrowStyle = `
    absolute
    right-0
    opacity-0
    translate-x-3
    group-hover:opacity-100
    group-hover:translate-x-0
    text-[#ff6200]
    transition-all
    duration-700
  `;

  // ============================================================
  // Render
  // ============================================================
  return (
    <div className={modalStyle}>
      {/* ============================================================
          Modal Header
          ============================================================ */}
      <header className={headerStyle}>
        {/* ============================================================
            Close Icon
            ============================================================ */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className={closeButtonStyle}
        >
          <X size={24} strokeWidth={2} />
        </button>

        {/* ============================================================
            Right Side
            ============================================================ */}
        <section className={controlsStyle}>
          {/* Dark Mode */}
          <IconDarkMode />

          {/* /////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////// */}

          <SelectedLang />
        </section>
      </header>

      {/* ============================================================
          Navigation Links
          ============================================================ */}
      <nav className={navStyle}>
        <ul className={listStyle}>
          {menuBar_Links.map((item, index) => (
            <li key={index} className={listItemStyle}>
              <a
                href={item.href}
                aria-label={item.ariaLabel || item.label}
                onClick={(event) => handleLinkClick(event, item)}
                className={linkStyle}
              >
                {/* ============================================================
                    Number
                    ============================================================ */}
                <span className={numberStyle}>0{index + 1}</span>

                {/* ============================================================
                    Link
                    ============================================================ */}
                <span>{t(item.label.toLowerCase())}</span>

                {/* ============================================================
                    Arrow
                    ============================================================ */}
                <span className={arrowStyle}>→</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
