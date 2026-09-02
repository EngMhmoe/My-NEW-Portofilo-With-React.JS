//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Component
//============================================================
export default function BtnSendMessage({ state }) {
  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================
  const buttonStyle = `
    group
    relative
    w-full
    h-14
    flex
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-3xl
    rounded-tl-none
    rounded-br-none
    hover:rounded-tr-none
    hover:rounded-bl-none
    hover:rounded-3xl
    font-bold
    text-white
    bg-gradient-to-r
    from-red-600
    via-red-700
    to-orange-600
    shadow-[0_10px_30px_rgba(239,68,68,0.25)]
    transition-all
    duration-1200
    hover:-translate-y-1.5
    hover:shadow-[0_15px_40px_rgba(239,68,68,0.4)]
    active:translate-y-0
    active:scale-[1]
    disabled:opacity-50
    disabled:pointer-events-none
    cursor-pointer
  `;

  const shineStyle = `
    absolute
    inset-0
    bg-gradient-to-r
    from-transparent
    via-red-500
    to-white/5
    -translate-x-full
    transition-transform
    duration-1000
    group-hover:translate-x-full
  `;

  const iconContainerStyle = `
    relative
    z-10
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-xl
    bg-white/20
    backdrop-blur-sm
    transition-all
    duration-1000
    group-hover:translate-x-1
    group-hover:-translate-y-1
    group-hover:rotate-[-20deg]
    group-hover:scale-110
  `;

  const iconStyle = `
    transition-transform
    duration-1000
    group-hover:translate-x-1.5
    group-hover:-translate-y-1.5
  `;

  const textStyle = `
    relative
    z-10
    transition-all
    duration-500
    group-hover:tracking-wide
    text-lg
    font-bold
    capitalize
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    <button
      type="submit"
      id="SendMessage"
      disabled={state.submitting}
      className={buttonStyle}
    >
      {/* Shine Effect */}
      <span className={shineStyle} />

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      {/* Send Icon */}
      <span className={iconContainerStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25"
          height="25"
          className={iconStyle}
        >
          <path fill="none" d="M0 0h24v24H0z" />

          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          />
        </svg>
      </span>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////// */}

      {/* Text */}
      <span className={textStyle}>
        {state.submitting
          ? `${t("sending".toLowerCase())}...`
          : t("send message".toLowerCase())}
      </span>
    </button>
  );
}
