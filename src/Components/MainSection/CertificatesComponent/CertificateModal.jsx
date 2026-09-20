// ============================================================
// React
// ============================================================
import { useEffect } from "react";

// ============================================================
// Icons
// ============================================================
import { X, ExternalLink } from "lucide-react";

// ============================================================
// Libraries
// ============================================================
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// ============================================================
// Component
// ============================================================
export default function CertificateModal({ certificate, isOpen, onClose }) {
  // ============================================================
  // Translation
  // ============================================================
  const { t } = useTranslation();

  // ============================================================
  // Effects
  // ============================================================
  // Prevent Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close With Escape
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
  // Styles
  // ============================================================
  const overlayStyle = `
    fixed
    inset-0
    z-[9999]
    flex
    items-center
    justify-center
    bg-black/85
    p-4
    backdrop-blur-md
  `;

  const modalStyle = `
    relative
    max-h-[92vh]
    w-full
    max-w-5xl
    overflow-hidden
    rounded-3xl
    border
    border-red-600/30
    bg-[#180c0cda]
    shadow-[0_0_60px_rgba(220,20,60,0.2)]
  `;

  const closeButtonStyle = `
    absolute
    right-6
    top-6
    z-20
    flex
    h-12
    w-12
    cursor-pointer
    items-center
    justify-center
    rounded-full
    bg-red-500
    text-white
    transition-all
    duration-1000
    hover:scale-110
    hover:bg-red-700
    hover:shadow-[0_0_20px_rgba(220,20,60,0.5)]
  `;

  const imageContainerStyle = `
    flex
    max-h-[82vh]
    items-center
    justify-center
    overflow-auto
    p-5
    pt-25
  `;

  const certificateImageStyle = `
    max-h-[78vh]
    w-auto
    max-w-full
    rounded-xl
    object-contain
    shadow-2xl
  `;

  const previewContainerStyle = `
    flex
    min-h-[400px]
    flex-col
    items-center
    justify-center
    gap-6
    p-10
    text-center
  `;

  const previewIconStyle = `
    flex
    h-20
    w-20
    items-center
    justify-center
    rounded-2xl
    border
    border-red-600/30
    bg-red-700/10
    text-red-500
  `;

  const previewTitleStyle = `
    text-3xl
    capitalize
    font-extrabold
    text-white
  `;

  const previewDescriptionStyle = `
    max-w-md
    text-white/60
  `;

  // ============================================================
  // Render
  // ============================================================
  return (
    <AnimatePresence>
      {isOpen && certificate && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className={overlayStyle}
        >
          {/* ============================================================
              Modal Container
              ============================================================ */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 500,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 30,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={modalStyle}
            onClick={(event) => event.stopPropagation()}
          >
            {/* ============================================================
                Close Button
                ============================================================ */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate"
              className={closeButtonStyle}
            >
              <X size={25} />
            </button>

            {/* ============================================================
                Certificate Image
                ============================================================ */}
            {certificate.image ? (
              <div className={imageContainerStyle}>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className={certificateImageStyle}
                />
              </div>
            ) : (
              <div className={previewContainerStyle}>
                {/* ============================================================
                    Preview Icon
                    ============================================================ */}
                <div className={previewIconStyle}>
                  <ExternalLink size={35} />
                </div>

                {/* ============================================================
                    Preview Title
                    ============================================================ */}
                <h3 className={previewTitleStyle}>
                  {t("certificate preview")}
                </h3>

                {/* ============================================================
                    Preview Description
                    ============================================================ */}
                <p className={previewDescriptionStyle}>
                  {t("preview the certificate and view its details.")}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
