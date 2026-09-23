// ============================================================
// React
// ============================================================
import { useState } from "react";

// ============================================================
// Components
// ============================================================
import MobileMenuModal from "./MobileMenuModal";

// ============================================================
// Component
// ============================================================
export default function IconMenuBar() {
  // ============================================================
  // State
  // ============================================================
  const [isOpen, setIsOpen] = useState(false);

  // ============================================================
  // Styles
  // ============================================================
  const containerStyle = `
    flex
    items-center
    lg:hidden
  `;

  const buttonStyle = `
    inline-flex
    flex-col
    items-center
    justify-center
    rounded-full
    w-10
    h-10
    bg-[#660000]
    border-0
    cursor-pointer
    p-0
    transition-transform
    duration-1000
    hover:scale-105
    active:scale-95
  `;

  const lineStyle = `
    block
    mx-auto
    rounded-[2px]
    w-[26px]
    h-[2px]
    bg-white
    transition-all
    duration-300
  `;

  const secondLineStyle = `
    block
    mx-auto
    rounded-[2px]
    w-[26px]
    h-[2px]
    bg-white
    mt-[6px]
    transition-all
    duration-300
  `;

  const modalContainerStyle = `
    flex
    lg:hidden
  `;

  // ============================================================
  // Render
  // ============================================================
  return (
    <>
      {/* ============================================================
          Menu Icon
          ============================================================ */}
      <div className={containerStyle}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className={buttonStyle}
        >
          <span className={lineStyle} />

          <span className={secondLineStyle} />
        </button>
      </div>

      {/* ============================================================
          Mobile Menu Modal
          ============================================================ */}
      <section className={modalContainerStyle}>
        <MobileMenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </section>
    </>
  );
}
